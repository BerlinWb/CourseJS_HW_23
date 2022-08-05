"use strict";
//1.

const firstArr = [1,2,3];
const secondArr = [4,5,6];
const sumArr = firstArr.concat(secondArr);
console.log(sumArr);

//2.

const arr = [1,2,3];
const reversed = arr.reverse();
console.log(reversed);


//3.
/*
const arr = [1,2,3];
arr.push(4,5,6);
console.log(arr);
*/

//4.
/*
const arr = [1,2,3];
arr.unshift(4,5,6);
console.log(arr);
*/

//5.
/*
const arr =["js", "css", "jq"];
alert(arr[0]);
*/

//6.

/*
const arr = ["js", "css", "jq"];
alert(arr[2]);
*/

//7.
/*
const arr = [1, 2, 3, 4, 5];
const copiedArr = arr.slice(0,3);
console.log(copiedArr);
*/

//8.
/*
const arr = [1, 2, 3, 4, 5];
const copiedArr = arr.slice(3,5);
console.log(copiedArr);
*/
//9.
/*
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);
*/

//10.
/*
const arrFirst = [1, 2, 3, 4, 5];
const arrSecond = arrFirst.splice(1, 3);
console.log(arrSecond);
*/

//11.
/*
const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0,"a", "b", "c");
console.log(arr);
*/
//12.
/*
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0,"a", "b");
arr.splice(6,0,  "c");
arr.splice(8, 0, "e");
console.log(arr);
*/

//13.
/*
const arr = [3, 4, 1, 2, 7];
arr.sort( (a, b) => a - b );
console.log(arr);
*/

//14.
/*
const arr = [5, 6, 7, 8, 9];
const result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);
*/

//15.
/*
const arr = [5, 6, 7, 8, 9];
const result = arr.map(x => x ** 2)
console.log(result);
*/

//16.
/*
const arr = [1,-3, 5, 6,-7, 8, 9,-11];
const result = arr.filter(x => x < 0);
console.log(result);
*/

//17.
/*
const arr = [1,-3, 5, 6,-7, 8, 9,-11];
const result = arr.filter(x => x % 2 === 0)
console.log(result);
*/

//18.
/*
const arr = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
const result = arr.filter(x => x.length > 5 );
console.log(result);
*/

//19.
/*
const arr = [1, 2, [3, 4], 5, [6, 7]];
const result = arr.filter(x => Array.isArray(x));
console.log(result);
*/

//20.
/*
const arr = [5,-3, 6,-5, 0,-7, 8, 9];
const result = arr.filter(x => x < 0);
console.log(result.length);
*/
