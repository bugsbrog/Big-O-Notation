// Big O Notation

// * O(n) operation inside of an O(n) operation is O(n^2)

// As n grows, the runtime roughly grows at the rate of n^2.

function printAllPairs(n) {
    // O(n) (n # of operations)
    for (var i = 0; i < n; i++) {
        // O(n)
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
