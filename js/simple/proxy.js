/*
*
* protect.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и список полей объекта, к которым она будет ограничивать доступ. При попытке прочитать или перезаписать поле, включенное в список защищенных, должно выбрасываться исключение.

import protect from '../protect.js';

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};

const protectedProps = ['password'];

const protectedUser = protect(user, protectedProps);
protectedUser.name; // John
protectedUser.age; // 25
protectedUser.password; // Error: Access to 'password' is restricted
protectedUser.name = 'Jane'; // установит значение 'Jane' в свойство 'name'
protectedUser.password = 'newPassword'; // Error: Access to 'password' is restricted

* */

const protect = (obj, protectedProps) => {
    return new Proxy(obj, {
        get(target, prop) {
            if (protectedProps.includes(prop)) {
                throw new Error(`Access to '${prop}' is restricted`);
            }
            return target[prop];
        },
        set(target, prop, value) {
            if (protectedProps.includes(prop)) {
                throw new Error(`Access to '${prop}' is restricted`);
            }
            target[prop] = value;
            return true;
        },
    });
};

export default protect;