// Find out Big O Notation

function countUpAndDown(n) {
    console.log("Going up!");
    // O(n)
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    // O(n)
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}
