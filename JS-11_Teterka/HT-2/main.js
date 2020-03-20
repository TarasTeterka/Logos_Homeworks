setInterval(function () {
  function animate() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let r1 = Math.round(Math.random() * 255);
    let g1 = Math.round(Math.random() * 255);
    let b1 = Math.round(Math.random() * 255);
    let mLeft = Math.round(Math.random() * 1200);
    let mTop = Math.round(Math.random() * 600);
    $('.circle').animate({
      marginLeft: `${mLeft}px`,
      marginTop: `${mTop}px`
    }, {
      duration: 1000
    });
    $('.circle').css('background-color', `rgb(${r},${g},${b})`);
    $('.circle').css('box-shadow', `0 0 20px 8px rgb(${r},${g},${b})`);
    $('.circle').css('border', `3px solid rgb(${r1},${g1},${b1})`);
  }
  animate();
}, 300);