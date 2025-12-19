var nums = [2,7,4,15];
var target = 6;
var num = 1;

for(let i = 0 ; i < nums.length && num == 1;i++){
    for(let j = 0 ; j < nums.length;j++){
        if(nums[i]+nums[j] == target && i != j){
            console.log(`[${i},${j}]`);
            num = 2;
        }
    }
}
















