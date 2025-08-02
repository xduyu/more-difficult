function ftlnia_arr(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    
    let largest = arr[0]; // Assume the first element is the largest
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if a larger number is found
        }
    }
    
    return largest; // Return the largest number found
}

console.log(ftlnia_arr([3, 5, 7, 2, 8])); // Output: 8