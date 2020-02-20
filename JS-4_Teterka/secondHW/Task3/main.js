let res = -1;
function info(text) {
    do {
        var x = text.indexOf("html", x + 1);

        console.log(x)
        res++;
    } while (x != -1);
}
let ask = prompt(`Введіть текст`);
var newLenght = ask.length;
console.log(newLenght)
info(ask);
alert(` Ви ввели ${res} разів слово "html"`);





