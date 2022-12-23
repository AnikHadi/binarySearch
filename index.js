const findValueWithBinary = (arr, value) => {
  // console.log(arr);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.round((start + end) / 2);
    if (value === arr[middle]) return middle;
    if (value > arr[middle]) {
      start = middle + 1;
    }
    else if (value < arr[middle]) {
      end = middle - 1;
    }
  }
  return -1;
}

const input = [1, 3, 4, 6, 8, 9, 11, 21, 24, 28] //✔️✔️
// const input = [3, 8, 9, 4, 6, 1, 11, 24, 28, 21].sort((a,b) => a-b); //vul
console.log(findValueWithBinary(input, 9));
