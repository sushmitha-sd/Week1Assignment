/*Assignment Details:
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.

Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result
*/

function isOddOrEven(num){
if (num%2 == 0)
    {
        console.log(`${num} is a Even number`)
    }
else{
        console.log(`${num} is an odd number`)
    }
}
isOddOrEven(33)

/*Assignment Details:
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.
Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.*/


function numberasaparameter(number){
if(number>0) 
    {
        console.log(`${number} is Positive`)
    }
else if(number<0)
    {
        console.log(`${number} is negative`)
    }
else
    {
        console.log(`${number} is Neutral`)
    }
}
numberasaparameter(-23)

/*Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript*/

function launchBrowser(browserName){
    if(browserName == 'chrome')
    {
        console.log(`Launch the ${browserName} browser`)
    }
    else{
        console.log(`launch the ${browserName} browser`)
    }
}
launchBrowser("chrome")
launchBrowser("Edge")

function testType(typeoftesting)
{
    switch(typeoftesting)
    {
        case 'smoke':
        {
            console.log(`Run the smoke Testing`)
            break;
        }
        case 'sanity':
        {
            console.log(`Run the Sanity Testing`)
            break;
        }
        case 'Regression':
        {
            console.log(`Run the Regression Testing`)
            break;
        }
        default:
        {
            console.log("Run the Smoke tests by default...")
        }
    }
}
testType('Regression')
testType("sanity")       
testType("regression")  
testType("performance") 

/*Assignment Details:
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters
*/

//Example 1:
let s = "Hello World"
let out = s.split(" ")[1].length
console.log(`The last word is World with length ${out}`)
//Example 2:
let k = " fly me to the moon "
let output = k.trim().split(" ")
for (i=0;i<output.length;i++)
{
    if (output[i]=='moon'){
        console.log(`The last word is ${output[i]} with ${output[i].length}`)
    }
}
//example3
function isAnagram(str1, str2) {
    str1 = str1.replace(" ", '').toLowerCase()
    str2 = str2.replace(" ", '').toLowerCase()
    let sortedStr1 = str1.split('').sort().join('')
    let sortedStr2 = str2.split('').sort().join('')
    return sortedStr1 === sortedStr2
}
// Example 1
console.log(isAnagram('Listen', 'silent'))
// Example 2
console.log(isAnagram('Hello', 'world'))   




/*Assignment Details:
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
palindrome, then test your function with various strings and print the results.
Assignment Requirements:
Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false.
*/

function palindrome(wordstr)
{
let reverse_word = ''
for (let i=wordstr.length-1;i>=0;i--)
{
    reverse_word = reverse_word + wordstr[i]  
}
if(reverse_word == wordstr)
    {
        console.log(`${reverse_word} is true`)
    }
    else
    {
        console.log(`${reverse_word} is False`)
    }
}
palindrome("Sushmitha")
palindrome("madam")
palindrome("sus")
