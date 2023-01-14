const bubbleSort = (array) => {
    let isReplace;
    let count = array.length - 1;

    do {
        isReplace = false;
        count -= 1;

        for (let i = 0; i <= count; i += 1) {
            if (array[i] > array[i + 1]) {
                const item = array[i];

                isReplace = true;
                array[i] = array[i + 1];
                array[i + 1] = item;
            }
        }
    } while (isReplace);

    return array;
};

export default bubbleSort;