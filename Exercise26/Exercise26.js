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