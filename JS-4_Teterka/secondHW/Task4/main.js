// let text = prompt("Введіть ваше посилання");
// if (text == null) {
//     alert("Ви відмінили введення посилання");
// }

// else if (text.indexOf("//") == 5) {
//     alert(
//         `Після видалення "http://" ваше посилання виглядає так:  ${text.substr(
//             7
//         )}`
//     );
// } else if (text.indexOf("//") == 6) {
//     alert(
//         `Після видалення "https://" ваше посилання виглядає так:  ${text.substr(
//             8
//         )}`
//     );
// } else {
//     alert("Ви ввели неправильне посилання");
// }




// ДРУГИЙ СПОСІБ

let text = prompt('Введіть ваше посилання')
if(text == null){
    alert('Ви відмінили введення посилання')
}

else if(text.indexOf('//') == 5 || text.indexOf('//') == 6){
let num = text.indexOf('//')
let result = text.substr(num + 2)
alert(`Після видалення "https:// | http://" ваше посилання виглядає так: ${result} `)
}

else{
    alert("Ви ввели неправильне посилання")
}