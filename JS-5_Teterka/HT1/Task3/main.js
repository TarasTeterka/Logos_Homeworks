let mySqrt = prompt('Введіть число для обчислення квадратного кореня');

function getSqrt(mySqrt) {
	let completeSqrt = mySqrt;
	if (completeSqrt > 0) {
		alert('Квадраний корінь з ' + mySqrt + ' = ' + Math.sqrt(completeSqrt));
	} else if (isNaN(completeSqrt)) {
		alert('Ви ввели не число, повинне бути числове значення.');
	} else if (completeSqrt < 0) {
		alert('Ви ввели від*ємне значення, введіть додатнє число.');
	} else {
		alert('Ви нічого не ввели, Будь ласка, введіть число!');
	}
}
getSqrt(mySqrt);
