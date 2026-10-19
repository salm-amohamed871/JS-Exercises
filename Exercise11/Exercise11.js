// // Exercise 11

// for(let i=1; i<51; i++){
//     console.log(i)
// }

// // Exercise12

// const fruits =["apple", "banana", "cherry"]
// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

//Exercise 13
// let i=5;
// while(i>0){
//     console.log(i)
//     i--
// }

// Exercise 14
// let i=0;
// do{
//     i=prompt(i>10)
//     console.log(i>10)
// } while(i<=10)
//     console.log("welcome")


    //Exercise15
    const person = [
        { name: "Alice", age: 25, city: "Wonderland" },
        {
            name:"bob", age:30, city:"Wonderland"
        },
        {
            name:"charlie", age:35,city: "washigtone"
        }
    ] 
    for(const p of person){

        for(const key in p){
        console.log(key +": "+p[key])
    }
    }
    

 