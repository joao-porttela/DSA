export function insertionSort(arr: any[], n: number) {
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = curr;
  }
}
