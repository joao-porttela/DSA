export function selectionSort(arr: any[], n: number = arr.length) {
  let i, j, min_idx, temp;

  for (i = 0; i < n; i++) {
    min_idx = i;

    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) min_idx = j;
    }

    temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
}
