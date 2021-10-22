function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < (array.length - i - 1); j++) {
            if (array[i] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}

