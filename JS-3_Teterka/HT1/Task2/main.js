function number (x){
for(let i = 2; i < x; i++){
 var res =  x % i  
//  console.log(res)
 if(res == 0){
     res = false
     break;
 }
}
if(res == false){
    console.log(`Число не є цілим`)
}
else{
    console.log('Число є цілим')
}
return console.log()
}

let ask = prompt('Введіть число')

number(ask)



