// Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:
//
// Исходный объект
// Цепочка ключей (массив), по которой ведётся поиск значения
//
// В случае, когда добраться до значения невозможно, возвращается null.
//

const data = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1',
        },
        1: {
            name: 'web2',
            null: 3,
            active: false,
        },
    },
};

// const get = (data, keys) => {
//     let result = null;
//
//     for (let i = 0; i < keys.length; i += 1) {
//         for (const item in data) {
//             if (keys[i] === item) {
//                 result = data[item];
//             }
//
//             if (!Object.hasOwn(data, keys[i])) {
//                 result = null;
//
//                 if (keys.length === 2 && data[item][keys[i]]) {
//                     result = data[item][keys[i]];
//                 }
//
//                 if (data[item][keys[i - 1]] && Object.hasOwn(data[item][keys[i - 1]], keys[i])) {
//                     result = data[item][keys[i - 1]][keys[i]];
//                 }
//
//                 if (keys.length > 3) {
//                     const keysArray = Object.keys(data[item]);
//
//                     for (let j = 0; j < keysArray.length; j += 1) {
//                         for (const obj in data[item][keysArray[j]]) {
//                             if (typeof data[item][keysArray[j]][obj] === 'object') {
//                                 if (data[item][keysArray[j]][obj][keys[i]]) {
//                                     result = data[item][keysArray[j]][obj][keys[i]];
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//
//     return result;
// };

const get = (data, keys) => {
    let current = data;
    for (const key of keys) {
        const hasProperty = Object.hasOwn(current, key);
        if (!hasProperty) {
            return null;
        }
        current = current[key];
    }

    return current;
};

get(data, ['undefined']); // null
get(data, ['user']); // 'ubuntu'
get(data, ['user', 'ubuntu']); // null
get(data, ['hosts', 1, 'name']); // 'web2'
get(data, ['hosts', 0]); // { name: 'web1' }
get(data, ['hosts', 1, null]); // 3
get(data, ['hosts', 1, 'active']); // false
