function logAtMost5(n) {
    // Big O Notation: O(1)
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}