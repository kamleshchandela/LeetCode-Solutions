/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {

    var a = nums[0] ; 
    var b = nums[1] ; 
    var c = nums[2] ; 

    if (a + b <= c || b + c <= a || c + a <= b) {
        return "none";
    }

    else if (a == b && b == c) {
        return "equilateral";
    }

    else if (a == b || b == c || a == c) {
        return "isosceles";
    }

    return "scalene";
};