/*Assignment Details:
Declare variables using `let` for different data types in JavaScript, and verify their types using `typeof`,
including an uninitialized variable.
Assignment Requirements:
userName // String
organization // String
contactNumber // Number
knowsAutomation // Boolean
usesPlaywright // Undefined (not assigned)*/

let username = 'sushmitha'
username = 'Dhanasekaran'
let organization = 'Cognizant Technology solutions'
let contactNumber= 8734543435
let knowsAutomation = true
//knowsAutomation = 'Selenium'
let usesPlaywright
//usesPlaywright = true

console.log(`Username is: ${username} ${typeof(username)}`)
console.log(`organization is: ${organization} ${typeof(organization)}`)
console.log(`contactNumber is: ${contactNumber} ${typeof(contactNumber)}`)
console.log(`knowsAutomation is: ${knowsAutomation} ${typeof(knowsAutomation)}`)
console.log(`usesPlaywright is: ${usesPlaywright} ${typeof(usesPlaywright)}`)