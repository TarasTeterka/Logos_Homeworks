document.querySelector('#block').onmouseover = function () {

    document.querySelector('#block').style.backgroundColor = `yellow`
    document.querySelector('#block').style.border = `3px groove  green`
    document.querySelector('#h1').innerText = `Хочеш знати який?`
    document.querySelector('#block').style.color = `black`
}

document.querySelector('#block').onmouseout = function () {
    document.querySelector('#block').style.backgroundColor = `blueviolet`
    document.querySelector('#h1').innerText = `У мене є секрет!`
    document.querySelector('#block').style.border = `3px groove  orange`
    document.querySelector('#block').style.color = `black`
}
document.querySelector('#block').onclick = function () {
    document.querySelector('#block').style.backgroundColor = `black`
    document.querySelector('#block').style.color = `white`
    document.querySelector('#h1').innerText = `А я тобі не скажу!`
    document.querySelector('#block').style.border = `3px groove  yellow`
}