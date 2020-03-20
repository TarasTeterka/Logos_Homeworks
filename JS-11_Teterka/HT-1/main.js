$('.circle').click(function() {
	let w = Math.round(Math.random() * 200);
	let h = Math.round(Math.random() * 200);
	let r = Math.round(Math.random() * 255);
	let g = Math.round(Math.random() * 255);
	let b = Math.round(Math.random() * 255);
	let m = Math.round(Math.random() * 900);
	let t = Math.round(Math.random() * 600);
	$(this).animate(
		{
			width: `${w}px`,
			height: `${h}px`,
			marginLeft: `${m}px`,
			marginTop: `${t}px`
		},
		{
			duration: 1000
		}
	);
	$(this).css('background-color', `rgb(${r},${g},${b})`);
});
