function ctnoeia_arr(arr) {
    if (!Array.isArray(arr)) {
        return "Input is not a valid array"; // Check if input is an array
    }
    return arr.length; // Return the length of the array
}

console.log(ctnoeia_arr([1, 2, 3]))
