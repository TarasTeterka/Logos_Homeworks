function getDigits(number){
	number = number - Math.floor(number)
	
	console.log(Math.trunc(number * 100) / 100)
	
} 
getDigits(1.25)
getDigits(7.313)
getDigits(100.3)


