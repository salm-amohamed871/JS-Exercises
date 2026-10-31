function nonBlockingFunction() {
    setTimeout(() => {
        console.log("Non-blocking task completed");
    }, 2000);
}

nonBlockingFunction();

function blockingFunction() {
    return "Blocking task completed";
}

console.log(blockingFunction());

// Exercise 27

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task completed successfully!");
        }, 2000);
    });
}

fetchData()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));


// Exercise 28
async function getData() {
    try {
        const message = await fetchData();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

getData();

// Exercise 29
async function FetchDate() {
    console.log("Starting.....")
    const respone = await fetch('https://jsonplaceholder.typicode.com/posts')
    const date = await respone.json();
    console.log("Respone: ", date)

}
FetchDate()


// Exercise 30

function operate(a,b, callback){
    return callback(a,b)
}
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function devide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}
console.log("Adding: ", operate(3,4, add))
console.log("Subtaracting: ", operate(3,4, sub))
console.log("Devide: ", operate(3,4, devide))
console.log("Multiplication: ", operate(3,4, multiply))