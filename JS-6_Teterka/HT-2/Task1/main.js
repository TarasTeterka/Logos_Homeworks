// Для трьох кольорів

let block = document.getElementById("block");
let i = 0
block.onmouseover = function () {

    if (i == 0) {
        this.setAttribute("style", "background-color:red;");
        i++
    } else if (i == 1) {
        this.setAttribute("style", "background-color:yellow;");
        i++
    } else if (i == 2) {
        this.setAttribute("style", "background-color:green;");
        i = 0
    }
}

block.onmouseout = function () {
    this.setAttribute("style", "background-color:blueviolet;");
}

//////////////////////////////////////////////////////////////////
//   Для рандомного кольору

// document.querySelector('#block').onmouseover = function(){
//     let r = Math.round(Math.random()*255)
//     let g = Math.round(Math.random()*255)
//     let b = Math.round(Math.random()*255)
//     document.querySelector('#block').style.backgroundColor = `rgb(${r},${g},${b})`
// }

// document.querySelector('#block').onmouseout = function(){
//     this.style.backgroundColor = 'blueviolet'
// }