const myFilter = (collection, callback) => {
    const result = [];
    for (const item of collection) {
        // Предикат используется только для проверки
        // Внутрь callback по очереди передается каждый элемент коллекции collection
        if (callback(item)) {
            // В результат всегда добавляется элемент исходной коллекции
            result.push(item);
        }
    }

    return result;
}

const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 1 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];

const filteredUsers = myFilter(users, (user) => user.age > 10);
console.log(filteredUsers);
// [
//   { name: 'Igor', age: 19 },
//   { name: 'Matvey', age: 16 },
// ]
