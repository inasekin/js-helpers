const myMap = (collection, callback) => {
    const result = [];
    for (const item of collection) {
        // Вызов переданного колбека на каждом элементе коллекции
        const newItem = callback(item);
        // Возврат из колбека добавляется в результирующий массив
        result.push(newItem);
    }

    return result;
};

const numbers = [5, 2, 3];
const newNumbers = myMap(numbers, (number) => number ** 2);
console.log(newNumbers); // => [25, 4, 9]

const getChildren = (users) => {
    const childrenOfUsers = users.map(({ children }) => children);
    return childrenOfUsers.flat();
};

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива в ключе children.
//
//     import getChildren from './users.js';
//
//
//
// const users = [
//
//     {
//
//         name: 'Tirion',
//
//         children: [
//
//             { name: 'Mira', birthday: '1983-03-23' },
//
//         ],
//
//     },
//
//     { name: 'Bronn', children: [] },
//
//     {
//
//         name: 'Sam',
//
//         children: [
//
//             { name: 'Aria', birthday: '2012-11-03' },
//
//             { name: 'Keit', birthday: '1933-05-14' },
//
//         ],
//
//     },
//
//     {
//
//         name: 'Rob',
//
//         children: [
//
//             { name: 'Tisha', birthday: '2012-11-03' },
//
//         ],
//
//     },
//
// ];
//
//
//
// getChildren(users);
//
// // [
//
// //   { name: 'Mira', birthday: '1983-03-23' },
//
// //   { name: 'Aria', birthday: '2012-11-03' },
//
// //   { name: 'Keit', birthday: '1933-05-14' },
//
// //   { name: 'Tisha', birthday: '2012-11-03' },
//
// // ];

const getChildrenSecond = (users) => {
    const result = [];
    if (users.length === 0) return result;

    for (const item of users) {
        if (item.hasOwnProperty('children')) {
            result.push(item.children);
        }
    }

    return result.flat();
};
