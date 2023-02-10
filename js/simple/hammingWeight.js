// Вес Хэмминга — это количество единиц в двоичном представлении числа.
//     solution.js
//
// Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.
//     Примеры
//
// hammingWeight(0); // 0
//
// hammingWeight(4); // 1
//
// hammingWeight(101); // 4
//
// Подсказки
//
// Метод toString() может помочь перевести число в двоичную систему

const hammingWeight = (number) => {
    const result = (number >>> 0).toString(2);

    return result.replace(/[^1]/g, '').length;
};

export default hammingWeight;