import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testProject';
}

// function calcSubset(A, res, subset, index) {
//   // Add the current subset to the result list
//   res.push([...subset]);

//   // Generate subsets by recursively including and excluding elements
//   for (let i = index; i < A.length; i++) {
//       // Include the current element in the subset

//       subset.push(A[i]);
//       // console.log("subset", subset)
//       // if (A[i] < A[i + 1]) {

//       // Recursively generate subsets with the current element included
//       calcSubset(A, res, subset, i + 1);

//       // Exclude the current element from the subset (backtracking)
//       subset.pop();
//       // }
//   }
// }

// function subsets(A) {
//   const subset = [];
//   const res = [];
//   let index = 0;
//   calcSubset(A, res, subset, index);
//   return res;
// }

// // Driver code
// function main() {
//   const array = [10, 12, 4, 6, 100, 2, 56]//, 34, 79];
//   const res = subsets(array);

//   // Print the generated subsets
//   let final = 0
//   let finalArr = []
//   let maxCount = 0
//   let maxArr = 0
//   for (let i = 0; i < res.length; i++) {
//       // console.log("res", i, res[i]);
//       let arr = res[i]
//       // if (arr.length == array.length) {

//       for (let j = 0; j < arr.length; j++) {
//           let cnt = 0
//           for (let k = j; k < arr.length; k++) {
//               // console.log(j,arr[j],k, arr[k])
//               if (arr[j] < arr[k]) {
//                   cnt = cnt + 1
//                   // console.log("arr", arr)
//               }
//               else if (arr[j] > arr[k]) {
//                   k = arr.length
//                   // console.log("arr", arr)
//               }
//               else {
//                   // k = arr.length
//                   // cnt = cnt - 1
//               }
//           }
//           // console.log("cnt", cnt)
//           if (cnt == arr.length - 1 && arr.length > 1) {
//               final = final + 1
//               finalArr.push(arr)
//               console.log("max", arr)
//               if (maxCount < cnt) {
//                   maxCount = cnt
//                   maxArr = arr
//                   console.log("max", arr)
//               }
//           }
//       }
//       // }
//   }
//   // console.log("final", final, "finalArr", finalArr)
//   console.log("maxCount", maxCount, "maxArr", maxArr)


// }

// // Call the main function
// main();