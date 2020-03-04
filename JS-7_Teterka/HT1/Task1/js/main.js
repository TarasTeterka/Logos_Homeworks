

let block = document.querySelector('.block')


let getSel = sel => document.querySelector(sel)
getSel('#up').addEventListener('click', function(){
    let goUp = block.offsetTop;
        if(goUp>0){
        console.log(goUp)
        block.style.top = goUp - 20 + 'px'
        block.style.transform = "rotate(0deg)"
    }
   
   
})
getSel('#left').addEventListener('click', function(){
    let goLeft = block.offsetLeft;
            if(goLeft > 60){
            console.log(goLeft)
            block.style.left = goLeft - 20 + 'px'
            block.style.transform = 'rotate(-90deg)'
            }
})
getSel('#right').addEventListener('click', function(){
  
            let goRight = block.offsetLeft;
            if(goRight<window.innerWidth - 70){
                console.log(goRight)
                block.style.left = goRight + 20 + 'px'
                block.style.transform = "rotate(90deg)"
        }
})
getSel('#down').addEventListener('click', function(){
  
    let goDown = block.offsetTop;
            if(goDown<window.innerHeight - 110){
                block.style.top = goDown + 20 + 'px'
                block.style.transform = "rotate(180deg)"
}
})