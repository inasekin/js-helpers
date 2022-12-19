// Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу) и возвращает массив, изменённый таким образом, что правая половина матрицы становится зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк.

const getMirrorMatrix = (matrix) => {
    const mirrorArray = array => {
        const size = array.length;
        const mid = parseInt(size / 2);
        const leftSlice = array.slice(0, mid);
        const leftSliceReversed = [...leftSlice].reverse();
        if (size % 2 === 1)
            return [...leftSlice, array[mid], ...leftSliceReversed];
        return [...leftSlice, ...leftSliceReversed]
    };

    return matrix.map(row => mirrorArray(row));
}

export default getMirrorMatrix;