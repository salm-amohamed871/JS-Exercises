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