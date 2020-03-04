let f1 = document.forms['f1'];
for (let i = 0; i < f1.elements.length; i++) {
	f1.elements[i].addEventListener('click', function() {
		document.body.style.backgroundColor = this.value;
		document.body.style.backgroundSize = 'cover';
	});
}

let f2 = document.forms['f2'];
f2.fontFamily.addEventListener('change', function() {
	for (let i = 0; i < f2.fontFamily.options.length; i++) {
		if (f2.fontFamily.options[i].selected) {
			document.body.style.fontFamily = this.value;
		}
	}
});

let f3 = document.forms['f3'];
for (let i = 0; i < f3.elements.length; i++) {
	f3.elements[i].addEventListener('click', function() {
		document.querySelector('#head').style.textAlign = this.value;
	});
}

let f4 = document.forms['f4'];
for (let i = 0; i < f4.elements.length; i++) {
	f4.elements[i].addEventListener('click', function() {
		document.querySelector('#paragraph').style.backgroundColor = this.value;
	});
}

let f5 = document.forms['f5'];
for (let i = 0; i < f5.elements.length; i++) {
	f5.elements[i].addEventListener('click', function() {
		document.querySelector('#paragraph').style.color = this.value;
	});
}

let f6 = document.forms['f6'];
for (let i = 0; i < f6.elements.length; i++) {
	f6.elements[i].addEventListener('click', function() {
		document.querySelector('#a1').style.color = this.value;
		document.querySelector('#a2').style.color = this.value;
		document.querySelector('#a3').style.color = this.value;
	});
}

let f7 = document.forms['f7'];
for (let i = 0; i < f7.elements.length; i++) {
	f7.elements[i].addEventListener('click', function() {
		document.querySelector('#div').style.color = this.value;
	});
}

let f8 = document.forms['f8'];
for (let i = 0; i < f8.elements.length; i++) {
	f8.elements[i].addEventListener('click', function() {
		document.querySelector('#div').style.fontSize = this.value + 'px';
	});
}

let f9 = document.forms['f9'];
for (let i = 0; i < f9.elements.length; i++) {
	f9.elements[i].addEventListener('click', function() {
		document.querySelector('#div').style.fontWeight = this.value;
	});
}

let liMark = document.querySelectorAll('.classLi');
let f10 = document.forms['f10'];
for (i = 0; i < f10.elements.length; i++) {
	f10.elements[i].addEventListener('click', function() {
		for (j = 0; j < liMark.length; j++) {
			document.querySelectorAll('.classLi')[j].style.listStyleType = this.value;
		}
	});
}

let firstLink = prompt('Введіть назву сайту, наприклад "Google"')
document.querySelector('#a1').innerHTML = firstLink

let secondLink = prompt('Введіть ще одну назву сайту, наприклад "W3schools"')
document.querySelector('#a2').innerHTML = secondLink

let thirdLink = prompt('Введіть останню назву сайту, наприклад "tackoverflow"')
document.querySelector('#a3').innerHTML = thirdLink







