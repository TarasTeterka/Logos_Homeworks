let myRadius = prompt('Введіть радіус круга');
function getArea(myRadius) {
	return myRadius * myRadius * Math.PI;
}

function MyArea() {
	let area = getArea(myRadius);
	if (area > 0) {
		alert('Площа круга ' + Math.round(area) + ' см');
	} else if (isNaN(area)) {
		alert('Ви ввели не число, повинне бути числове значення.');
	} else {
		alert('Ви нічого не ввели, Будь ласка, введіть радіус!');
	}
}

MyArea(myRadius);
