let arr = []

let maxNumber = 0;

function max(){
    maxNumber=arr[0]
    for(let i=0; i<arr.length; i++){
        // console.log(i)
      if(arr[i]>maxNumber){
          maxNumber = arr[i]
      }
      
    }
    alert(`Максимальне число: ${maxNumber}`)
}

function askNumber(ask){
    for(let i=0; i<ask; i++ ){
        let ask1 = prompt('Введіть число')
arr.push(ask1)
console.log(arr)
    }
}

ask = prompt('Введіть кількість чисел, які ви введете')

askNumber(ask)

max()






