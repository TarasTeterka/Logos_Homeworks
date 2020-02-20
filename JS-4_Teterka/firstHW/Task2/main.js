let myMath = {
   

  
sum(){
 
    return console.log( `${this.a} + ${this.b} =`,this.a + this.b)
    },

multiplication(){
   return console.log( `${this.a} * ${this.b} =`,this.a * this.b)
    },

division(){
   return console.log( `${this.a} / ${this.b} =`, this.a / this.b) 
    },
substraction(){
   return console.log( `${this.a} - ${this.b} =`, this.a - this.b) 
    },
}
myMath.a = 5,
myMath.b = 2,


myMath.sum();
myMath.multiplication();
myMath.division();
myMath.substraction();










