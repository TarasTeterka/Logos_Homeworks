function removeDuplicates(arr) {
	return Array.from(new Set(arr));
}

const arr1 = [ 'html', 'css', 'html', 'js' ];
const arr2 = [ 'html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss' ];

newArr1 = removeDuplicates(arr1);
newArr2 = removeDuplicates(arr2);
console.log(arr1);
console.log(newArr1);
console.log(arr2);
console.log(newArr2);


