//Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
    let countObj = {};
    if(nums.length === 0) {
        return false;
    }
    
    for(let num of nums) {
        if(!(num in countObj)){
            countObj[num] = 1;
        } else {
            countObj[num]++
        }
    }

    for(let num in countObj) {
      if(countObj[num] >= 2) {
        return true;
      } 
    }
    return false
};

containsDuplicate([1,2,3,1])    //true
containsDuplicate([2,17,4,22])  //false
containsDuplicate([])           //false

//Time: O(n) - have to iterate through entire array
//Space: O(n) - worse case is our object has no duplicates, so we will have to store all the items from the array