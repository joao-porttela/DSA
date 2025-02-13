import {bubbleSort} from "./algorithms/bubble_sort";
import {selectionSort} from "./algorithms/selection_sort";
import {insertionSort} from "./algorithms/insertion_sort";
import {mergeSort} from "./algorithms/merge_sort";
import {quickSort} from "./algorithms/quick_sort";

import {printArray} from "./utils/lib";

let arr = [64, 34, 25, 12, 22, 11, 90];
const n = arr.length;

console.log("Unsorted Array");
printArray(arr, n);

quickSort(arr);

console.log();

console.log("Sorted Array");

printArray(arr, n);
