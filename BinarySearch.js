function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) {
        return mid;
      }
      if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  }

  let arr = [1, 2, 4, 6, 8, 9];
  let x = 4;

  let result = binarySearch(arr, x);
  if (result === -1) {
    console.log("Không tìm thấy")
  } else {
    console.log("Tìm thấy ở vị trí: " + result);
  }
