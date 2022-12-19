// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности.
//     Примеры
//
// chunk(['a', 'b', 'c', 'd'], 2);
//
// // [['a', 'b'], ['c', 'd']]
//
//
//
// chunk(['a', 'b', 'c', 'd'], 3);
//
// // [['a', 'b', 'c'], ['d']]

const chunk = (arr, num) => {
    return arr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / num)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, []);
}

export default chunk;