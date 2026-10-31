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