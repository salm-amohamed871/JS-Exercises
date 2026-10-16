let color =[ "Black" , "White ", "Red"]
console.log(color)
console.log(color[0])
console.log(color[1])
console.log(color[2])


// Exercise7
color.push("Yellow")
console.log(color)
color.shift()
console.log(color)



// Exercise8
let car ={
    make : "Totota",
    model : "collora",
    year : 2020,
    start : function(){
        console.log("The car has started")

    }
}
console.log(car.make)
console.log(car.model)
console.log(car.year)
console.log(car.start())