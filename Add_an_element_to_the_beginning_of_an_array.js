function a_aet_tb_f_a_arr(arr, element) {
    if (!Array.isArray(arr)) {
        return "Input is not a valid array";
    }
    arr.unshift(element);
    return arr;
}

console.log(a_aet_tb_f_a_arr([2, 3, 4], 1)); // Output: [1, 2, 3, 4]