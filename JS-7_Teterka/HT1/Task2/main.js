document.querySelector('#color').addEventListener('click', function() {
	document.querySelector('.rgbColorsBackground').style.display = 'flex';
	document.querySelector('.imgColors').style.display = 'none';
});

document.querySelector('#image').addEventListener('click', function() {
	document.querySelector('.imgColors').style.display = 'flex';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#close').addEventListener('click', function() {
	document.querySelector('.imgColors').style.display = 'none';
	document.querySelector('.rgbColorsBackground').style.display = 'none';
});

document.querySelector('#blockColors1Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'rgb(204, 31, 31)';
});

document.querySelector('#blockColors2Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'rgb(54, 54, 209)';
});

document.querySelector('#blockColors3Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'rgb(13, 153, 13)';
});

document.querySelector('#blockColors4Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'olive';
});

document.querySelector('#blockColors5Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'rgb(241, 212, 43)';
});

document.querySelector('#blockColors6Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'palevioletred';
});

document.querySelector('#blockColors7Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'white';
});

document.querySelector('#blockColors8Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'rgb(175, 22, 175)';
});

document.querySelector('#blockColors9Enother').addEventListener('click', function() {
	document.querySelector('body').style.background = 'rgb(29, 123, 151)';
});

document.querySelector('#blockColors1').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img1.jpeg)';
});

document.querySelector('#blockColors2').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img2.jpeg)';
});

document.querySelector('#blockColors3').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img3.jpeg)';
});

document.querySelector('#blockColors4').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img4.jpeg)';
});

document.querySelector('#blockColors5').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img5.jpeg)';
});

document.querySelector('#blockColors6').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img6.jpeg)';
});

document.querySelector('#blockColors7').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img7.jpeg)';
});

document.querySelector('#blockColors8').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img8.jpeg)';
});

document.querySelector('#blockColors9').addEventListener('click', function() {
	document.querySelector('body').style.background = 'url(./image/img9.jpeg)';
});
