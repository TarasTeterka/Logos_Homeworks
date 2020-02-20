let text = prompt(`Введіть текст`);
if (text == null ) {
    alert('Ви скасували введення пошти');
}
else if (text.indexOf(`@`) == 0) {
    alert('Ви ввели неправильно - символ "@" не може бути на початку');
} else if (text.indexOf(`@`) == text.length - 1) {
    alert('Символ "@" не може бути вкінці');
} else if (text.indexOf(`@`) == -1) {
    alert('Ви ввели неправильно - символ "@" обов*язковий');

} else {
    alert("Все вірно");
}
