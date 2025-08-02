function ciaeiiaa(arr, element) {
    if (arr && arr.length > 0) {
        return false; // Return false if the array is null or empty
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true; // Return true if the element is found in the array
        }
    }
    console.log(arr.includes(element)); // Log the result of includes method
    return false; // Return false if the element is not found
}
ciaeiiaa([1, 2, 3, 4], 3); // Output: true
