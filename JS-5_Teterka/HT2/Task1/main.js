const arr = [ 1, 2, 3 ];
let arr1 = [];
let arr2 = [];

let arrCopy = function() {
	arr1 = arr.slice();
	arr2 = [ 10, 20 ];
	arr2 = arr.concat(arr2);
};
arrCopy();
console.log(arr1);
console.log(arr2);
console.log(arr);



