export function bubbleSort(arr: any[], n: number = arr.length) {
  let i, j, temp;
  let swapped;

  for (i = 0; i < n; i++) {
    swapped = false;

    for (j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    if (!swapped) break;
  }
}
