function sum(arr) {
    // Big O Notation: O(1) space complexity
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}