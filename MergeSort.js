function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    return [...result, ...left, ...right];
  }

  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  let arr = [5, 2, 4, 7, 1, 3, 2, 6];
  console.log(mergeSort(arr));
