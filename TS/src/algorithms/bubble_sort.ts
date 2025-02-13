export function bubbleSort(arr: any[], n: number) {
  let i, j, temp;
  let swapped: boolean;

  for (i = 0; i < n - 1; i++) {
    swapped = false;

    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (!swapped) break;
  }
}
