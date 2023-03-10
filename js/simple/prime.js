// Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту и печатает на экран yes или no.
//     Примеры
//
// sayPrimeOrNot(5); // 'yes'
//
// sayPrimeOrNot(4); // 'no'
//
// Подсказки
//
// Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.
//
//     Для этого выделите процесс определения того, является ли число простым, в отдельную функцию, возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода, интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).
//
// Пример такого разделения и хороших абстракций — в решении учителя.

const checkIsPrimeNum = (num) => {
    if (num > 1) {
        for (let i = 2; i < num; i += 1) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    return false;
};

const sayPrimeOrNot = (num) => {
    console.log(checkIsPrimeNum(num) ? 'yes' : 'no');
};

export default sayPrimeOrNot;