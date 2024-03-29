/*
* CustomPromise.js

В данном испытании вы реализуете собственную версию объекта Promise.

Реализуйте в классе CustomPromise конструктор, принимающий колбек executor(resolve, reject), методы then(onFulfill, onReject) и catch(onReject), и статические методы resolve(data) и reject(data). Добавьте в конструктор проверку типа параметра, используйте при выбросе ошибки сообщение из подготовленной константы. Все обработчики "по умолчанию" также необходимо добавить самостоятельно так, чтобы все проверки остались внутри объекта.
Алгоритм

Обратите внимание на использование thenable-объекта в тестах. Для него добавляется ещё одна проверка при разрешении промиса.

В решении должны отсутствовать встроенные Promise и ключевое слово async. Только таймеры и вызовы функций из функций.
Примеры использования

import CustomPromise from '../CustomPromise.js';

// Статические методы
const resolvedPromise = CustomPromise.resolve('Hello, world!');
resolvedPromise.then(console.log) // 'Hello, world!'

const rejectedPromise = CustomPromise.reject('Goodbye, world!');
rejectedPromise
  .then(console.log) //
  .catch(console.error) // 'Goodbye, world!'

// Методы экземпляра класса
const promise = new CustomPromise((resolve) => resolve('Hello, world!'));
promise
  .then((value) => {
    console.log(value); // 'Hello, world!'
    throw new Error('Goodbye, world!');
  })
  .catch((err) => console.error(err));  // 'Error: Goodbye, world!'

Подсказки

Изучите кейсы использования в тестах, они опираются на возможности промисов из документации.

Если почувствуете, что нужны дополнительные материалы:

    описание стандарта, который имплементируется в упражнении
    курс "Синхронная асинхронность", чуть глубже погружающий в тему
    курс "Автоматное программирование" о конечных автоматах, чем является промис
* */

const errorMessage = 'Executor must be a function';

class CustomPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    constructor(executor) {
        if (typeof executor !== 'function') {
            throw new Error(errorMessage);
        }

        this.state = CustomPromise.PENDING;
        this.value = null;
        this.handlers = [];

        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (err) {
            this._reject(err);
        }
    }

    _resolve(value) {
        this.updateState(CustomPromise.FULFILLED, value);
    }

    _reject(error) {
        this.updateState(CustomPromise.REJECTED, error);
    }

    updateState(state, value) {
        if (this.state !== CustomPromise.PENDING) return;
        if (state === CustomPromise.FULFILLED && this.isThenable(value)) {
            return value.then(this._resolve.bind(this), this._reject.bind(this));
        }
        this.state = state;
        this.value = value;
        this.executeHandlers();
    }

    isThenable(value) {
        return value instanceof CustomPromise || (value && typeof value.then === 'function');
    }

    addHandler(handler) {
        this.handlers.push(handler);
        this.executeHandlers();
    }

    executeHandlers() {
        if (this.state === CustomPromise.PENDING) return;

        setTimeout(() => {
            this.handlers.forEach(handler => {
                if (this.state === CustomPromise.FULFILLED) {
                    if (handler.onFulfilled) {
                        handler.onFulfilled(this.value);
                    }
                } else if (handler.onRejected) {
                    handler.onRejected(this.value);
                }
            });
            this.handlers = [];
        }, 0);
    }

    then(onFulfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            this.addHandler({
                onFulfilled: value => {
                    if (!onFulfilled) {
                        resolve(value);
                        return;
                    }
                    try {
                        resolve(onFulfilled(value));
                    } catch (err) {
                        reject(err);
                    }
                },
                onRejected: error => {
                    if (!onRejected) {
                        reject(error);
                        return;
                    }
                    try {
                        resolve(onRejected(error));
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new CustomPromise((resolve) => resolve(value));
    }

    static reject(value) {
        return new CustomPromise((_, reject) => reject(value));
    }
}

export default CustomPromise;