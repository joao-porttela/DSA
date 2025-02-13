function partition(arr: any[], start: number, end: number) {
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  i++;
  let temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;

  return i;
}

export function quickSort(arr: any[], start: number = 0, end: number = arr.length - 1) {
  if (start >= end) return;

  const pivot = partition(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}
