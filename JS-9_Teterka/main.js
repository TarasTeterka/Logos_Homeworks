setInterval(function() {
	let dateNow = new Date();
	Date.parse();
	let y = dateNow.getFullYear();
	let mon = dateNow.getMonth() + 1;
	let day = dateNow.getDate();

	if (mon < 10) mon = '0' + mon;
	if (day < 10) day = '0' + day;

	document.querySelector('.date').innerHTML = `${day}.${mon}.${y}`;
});

setInterval(function() {
	let today = new Date();
	Date.parse();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	if (h < 10) h = '0' + h;
	if (m < 10) m = '0' + m;
	if (s < 10) s = '0' + s;
	document.querySelector('.hours').innerHTML = `${h}:${m}:${s}`;
}, 1000);

function zero(x) {
	if (x < 10) x = `0` + x;
	return x;
}
function twoZero(y) {
	if (y < 100) y = `0` + y;
	return y;
}

let l;
let s = 0;
let m = 0;
let h = 0;
var ms = 0;
let timer = function() {
	let z = document.querySelector(`.watch`).innerHTML;
	l = setInterval(function() {
		ms = ms + 10;
		if (ms > 999) {
			ms = 0;
			s = s + 1;
			if (s > 60) {
				s = 0;
				m++;
				if (m > 60) {
					m = 0;
					h++;
				}
			}
		}
		document.querySelector(`.watch`).innerHTML = `${zero(h)}:${zero(m)}:${zero(s)}:${twoZero(ms)}`;
	}, 10);
};

document.querySelector(`.start`).addEventListener(`click`, function() {
	timer();
});

document.querySelector(`.stop`).addEventListener(`click`, function() {
	clearTimeout(l);
});

document.querySelector(`.reset`).addEventListener(`click`, function() {
	document.querySelector(`.watch`).innerHTML = `00:00:00:000`;
	document.querySelector(`.result`).innerHTML = '';
	ms = 0;
	s = 0;
	m = 0;
	h = 0;
});

document.querySelector(`.loop`).addEventListener(`click`, function() {
	document.querySelector(`.result`).innerHTML += document.querySelector(`.watch`).innerHTML + `<br>`;
});
let z = +document.querySelector(`.number`).innerHTML;
let s1 = 0;
let m1 = z;
let timer2 = function() {
	z = +document.querySelector(`.number`).innerHTML;
	m1 = z;
	l2 = setInterval(function() {
		if (s1 == 0) {
			m1--;
			s1 = 59;
			if (m1 < 10) m1 = '0' + m1;
		}
		s1--;
		if (s1 < 10) s1 = '0' + s1;

		document.querySelector(`.timerTime`).innerHTML = `${m1}:${s1}`;
		if (m1 == 0 && s1 == 0) {
			alert(`Time out`);
			clearTimeout(l2);
		}
	}, 1000);
};

document.querySelector(`.add`).addEventListener(`click`, function() {
	let z = +document.querySelector(`.number`).innerHTML;
	z++;
	document.querySelector(`.number`).innerHTML = z;
});

document.querySelector(`.min`).addEventListener(`click`, function() {
	let z = +document.querySelector(`.number`).innerHTML;
	z--;
	document.querySelector(`.number`).innerHTML = z;
});

document.querySelector(`.startTimer`).addEventListener(`click`, function() {
	timer2();
});
document.querySelector(`.timerStop`).addEventListener(`click`, function() {
	clearTimeout(l2);
});
document.querySelector(`.timerReset`).addEventListener(`click`, function() {
	document.querySelector(`.timerTime`).innerHTML = `00:00`;
	z = +document.querySelector(`.number`).innerHTML;
	s1 = 0;
	m1 = z;
});
