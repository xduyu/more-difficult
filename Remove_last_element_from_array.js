function rlefa(arr) {
    if (arr.length === 0) {
        return []; // Return an empty array if the input array is empty
    }
    arr.pop();
    return arr; // Return the array after removing the last element
}

console.log(rlefa([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4]