/*1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]*/

let nums=[0,1,0,3,12];

function moveZerosToLast(nums)

{
    let count=0;
    let result=[];

    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===0)
        {
            count++;
        }
        else{
            result.push(nums[i]);
        }
    }

    while(count>0)
    {
        result.push([0]);
        count--;
      
    }
    console.log(result)
}

moveZerosToLast(nums);