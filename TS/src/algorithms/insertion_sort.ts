export function insertionSort(arr: any, n: number = arr.length) {
  let i, j, curr;

  for (i = 1; i < n; i++) {
    curr = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = curr;
  }
}
