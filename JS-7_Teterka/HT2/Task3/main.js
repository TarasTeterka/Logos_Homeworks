let f1 = document.forms['f1'];

document.querySelector('#move').addEventListener('click', function() {
	if (f1.t1.value != 0) {
		f1.t2.placeholder = f1.t1.value;
		f1.t1.value = '';
	}
});

let getSel = (sel) => document.querySelector(sel);
getSel('#t3').onblur = function() {
	if (f2.t3.value != 0) {
		getSel('#t3').placeholder = getSel('#t3').value;
		getSel('#t3').value = '';
	}
};
