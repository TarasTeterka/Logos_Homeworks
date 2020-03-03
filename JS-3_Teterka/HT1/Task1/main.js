let month = prompt()
switch (true){
    case month <=2 || month == 12:
        console.log('Зима');
        break;
    case (month <=5):
        console.log('Весна')
        break;
        case (month <=8):
            console.log('Літо')
            break;
        case (month <=11):
            console.log('Осінь')
            break;
            
         default:
         console.log('Неможливо, число не входить в діапазон від 1 до 12')
        break;
}





