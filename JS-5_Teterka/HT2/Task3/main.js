let arr1 = [ 'Ivan', 'Pavlo', 'Ira' ];
let arr2 = [ 'Oleksiy', 'Andriana' ];
let getLenghtArr1 = [];
let getLenghtArr2 = [];

let getLength = function() {
	arr1.forEach(function(itemsKey) {
		let arr1Length = itemsKey.length;
		getLenghtArr1.push(arr1Length);
	});

	arr2.forEach(function(itemsKey) {
		let arr2Length = itemsKey.length;
		getLenghtArr2.push(arr2Length);
	});
};
getLength();
console.log(getLenghtArr1);
console.log(getLenghtArr2);



