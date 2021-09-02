let myStr = "my name is amir.";
console.log(myStr.length); // length of String
console.log(myStr[0]) // print a character of String by index
console.log(myStr.slice(0,8)); // cut a slice of String (index start,index end) 
console.log(myStr.substring(0,7)); // cut a slice of String (index start,to index next)
console.log(myStr.substr(0,2)); // cut a slice of String (index start ,lenght to next)
console.log(myStr.replace("amir","sobhan")); // replace a word or character in String(default word,replace word)
console.log(myStr.toLowerCase()); // String to lowercase 
console.log(myStr.toUpperCase()); // String to uppercase
console.log(myStr.charAt(0)) // print a character of String by index
console.log(myStr.trim()) // delete white space in first & last of String
console.log("------------------------");
// Addition String methods:
let firstName = "AmirSobhan";
let lastName = "Hosseinpour";
console.log(firstName + " " + lastName);
console.log("my first name is " + firstName + " & my last name is "+ lastName);
console.log(`my first name is ${firstName} & my last name is ${lastName}`);
console.log("------------------------")
// padstart & padend =  to support padding at the beginning and at the end of a string.
let myNumber = "7"
console.log(myNumber.padStart(4,0)) // (Number of digits,Replace empty digits)
// build by Amirsobhan Hosseinpour ! 