//Exercise22

const colors=["Red", "Green", "Blue"]
const [first, second, third] = colors
console.log(first)
console.log(third)


//Exercise 23
const car={ make: "Toyota", model: "Corolla", year: 2020 }
const {make, model,year} =car
console.log(make)
console.log(model)


//Exercise 24

function calculateArea(widith,hight=4){
     console.log(widith*hight)

}
calculateArea(4)


//Exercise 24
//Spread
const numbers =[1,2,3]
const newNumbers = [...numbers,4,5,6]
console.log(newNumbers)

//Rest 
function multiply(...num){
    return num.reduce((total,num)=>total * num, 1)
    
}
console.log(multiply(20,30,40))

