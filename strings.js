//Write a function that takes a string as input and returns the number of vowels in the
// string.

function countVowel(name) { 
    const count = name.match(/["a","e","i","o","u"]/gi).length;
    return count;
}

const name = "Margaret";

const result = countVowel(name);

console.log(result);



//Write a function that takes an array of numbers as input and returns the sum of all the 
//numbers.


function addition(numArray){
    let sum =0
    for(let i=0;i<=numArray.length;i++){
        sum+=numArray[i];
        return sum 
         
    }  
}
const numArray=[8,9,6,4,3,5]

console.log(addition(numArray));


//Write a function that takes two numbers as input and returns true if their sum is greater
// than 100, and false otherwise.
function greaterNumbers(num1,num2){
    let sum =num1+num2
    if(sum>100){
        return "true"
    }else {
        return "false"
    }
    
}
console.log(greaterNumbers(60,30));


//Write a function that takes in a array of numbers as a parameter and returns the second 
//largest number in the array
function secondlargestNum(numArr){

}


//Write a function that takes a string as a parameter and returns true if the string is a
// palindrome and false otherwise

function checkPalindrome(name){
     const len = name.length;    //find the length of the string

     // loop through half of the string
     for (let i = 0; i < len / 2; i++) {
         // check if first and last string are same
         if (name[i] == name[len - 1 - i]) {
             return "true";
         }else{
            return "false";
    
         }
 }
}
 
 console.log(checkPalindrome("noon"));

 