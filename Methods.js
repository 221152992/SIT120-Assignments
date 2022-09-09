var stringOne = "This is a test, for task 1 week3_120_for"
var stringTwo = "This is the second variable"
var stringThree = "			SPACE				"

//from : stackoverflow.com - The "g" that you are talking about at the end of your regular expression is called a "modifier". The "g" represents the "global modifier". This means that your replace will replace all copies of the matched string with the replacement string you provide. - I had to find out!! 😁//

//returns character at specified position
console.log(stringOne.charAt(12))
//returns unique code of specified index
console.log(stringOne.charCodeAt(12))
//joins two or more strings
console.log(stringOne.concat(stringTwo))
//checks if a string ends with specified string or character
console.log(stringOne.endsWith("120"))
//unique code character that is the opposite of command one aka you use the code to find the index
console.log(String.fromCharCode(115))
//checks wether a string has the specified character
console.log(stringOne.includes("That"))
//returns position number of the first found occurence (aka letter) of the specified value in a string
console.log(stringOne.indexOf("for"))
//returns the position number of the last found occurence of the specified value in a string
console.log(stringOne.lastIndexOf("for"))
//returns a match (the founded word) in an array of each match
console.log(stringOne.match(/for/g))
//repeats a set string 
console.log(stringOne.repeat(5))
//replaces a value of a string
console.log(stringOne.replace(/for/g, "FOR"))
//searches a string for a specified value or regular expression and return the position of the match (found value)
console.log(stringTwo.search("ble"))
//extracts a part of a string and returns a new one
console.log(stringTwo.slice(10,12))
//splits a string in an array of substrings (i've specified the space in the quotes hence, it'll array based on the spacing)
console.log(stringTwo.split(" "))
//check whether a string begins with a specified character
console.log(stringOne.startsWith("This"))
//it extras the characters of a string 
console.log(stringTwo.substr(1, 3))
//extracts characters between two specified indexes but last value is where it stops, for instance last example included "his" but this includes "hi" meaning that it stopped at "s"
console.log(stringTwo.substring(1, 3))
//makes string lower case letters
console.log(stringOne.toLowerCase())
//makes string upper case
console.log(stringTwo.toUpperCase())
//removes white space for either side of the string
console.log(stringThree.trim())



