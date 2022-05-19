/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    let arr = []
    for(let i=0; i< len; i++){
        for(let j=i; j<= len; j++){
            if(i !== j){
              if(nums[i] + nums[j] === target){
                  return [].concat(i, j)
                  break
              }  
            }
        }
    }
};

