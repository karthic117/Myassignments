/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.*/

let input="Hello WORLD";


function getLastWord()
{

     let splitInput=input.split(" ");
     console.log(splitInput[1]);
     let length=splitInput[1].length;
     console.log(length);

}

getLastWord();