// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два отсортированных массива и находит их пересечение. Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.
//     Примеры
//
// getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
//
// getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []
//
// getIntersectionOfSortedArrays([], [2]); // []
//
// Алгоритм
//
// Поиск пересечения двух неотсортированных массивов — операция, в рамках которой выполняется вложенный цикл с полной проверкой каждого элемента первого массива на вхождение во второй.
//
//     Сложность данного алгоритма O(n * m) (произведение n и m), где n и m — размерности массивов. Если массивы отсортированы, то можно реализовать алгоритм, сложность которого уже O(n + m), что значительно лучше.
//
//     Суть алгоритма довольно проста. В коде вводятся два указателя (индекса) на каждый из массивов. Начальное значение каждого указателя 0. Затем идёт проверка элементов, находящихся под этими индексами в обоих массивах. Если они совпадают, то значение заносится в результирующий массив, а оба индекса инкрементируются. Если значение в первом массиве больше, чем во втором, то инкрементируется указатель второго массива, иначе — первого.

import _ from 'lodash';

const getIntersectionOfSortedArrays = (arrayOne, arrayTwo) => {
    const arrayIntersections = [];
    let indexOne = 0;
    let indexTwo = 0;
    const arrayOneUniq = _.uniq(arrayOne);
    const arrayTwoUniq = _.uniq(arrayTwo);

    while (indexOne < arrayOneUniq.length) {
        if (arrayOneUniq[indexOne] === arrayTwoUniq[indexTwo]) {
            arrayIntersections.push(arrayOneUniq[indexOne]);
            indexOne += 1;
            indexTwo += 1;
        } else if (arrayOneUniq[indexOne] > arrayTwoUniq[indexTwo]) {
            indexTwo += 1;
        } else {
            indexOne += 1;
        }
    }
    return arrayIntersections;
};

export default getIntersectionOfSortedArrays;