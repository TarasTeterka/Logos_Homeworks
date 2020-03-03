// Для одноцифрових чисел

// let  result = function(){
// let start = prompt('Введіть початкове число (мінімум 2)')
// let end = prompt('Введіть кінцеве число (максимум 9)')
// nextPrime:
// for (let i = start; i <= end; i++){
// 	if(i==1){
// 		console.log('Початкове число повинне бути не менше 2')
// 	}
// 	for (let j = 2; j < i; j++){
// 		if (i % j == 0) continue nextPrime;
// 	}
// 	console.log(i)
// }
// }
// result()






// /////////////////////
let count = prompt('Введіть потрібну кількість простих чисел');

let currentNumber = prompt('Введіть початкове число');

while (count != 0) {
	if (isNatural(currentNumber)) {
		console.log(currentNumber);
		count--;
	}
	currentNumber++;
}
function isNatural(number) {
	for (let i = 2; i <= number / 2; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}
