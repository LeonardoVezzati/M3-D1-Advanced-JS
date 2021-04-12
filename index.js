  /*
  1)
  Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
  
  const sumOrMultiple = function(n1, n2){
    let num1 = n1
    let num2 = n2
    sum = num1 + num2
    if (num1 === num2){
      return sum * 3
    } else {
      return sum
    }
  }
  console.log(sumOrMultiple(3,3))

*/

/*
2)
Create a function to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.

const checkNumbers = function(n1, n2){
  let num1 = n1
  let num2 = n2
  let sum = num1 + num2
  if (num1 === 50 || num2 === 50) {
    return true
  } else if (sum === 50 ) {
    return true
  } else {
    return false
  }
}
console.log(checkNumbers(50,24))

*/

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.

let stringToChange = "Ciao mamma guarda come mi diverto"
const removeCharacter = function(positionToRemove){
  let arrayOfTheStringToChange = stringToChange.split('')
  arrayOfTheStringToChange.splice(positionToRemove, 1)
  let newStringChanged = arrayOfTheStringToChange.join('')
  return newStringChanged
}
console.log(removeCharacter(2))

*/

/*
4)
 Create a function to find the largest of three given integers.

const findTheBiggestNumber = function(n1, n2, n3){
  let num1 = n1
  let num2 = n2
  let num3 = n3
  if (num1>num2 && num1>num3) {
    return num1
  } else if  (num2>num1 && num2>num3) {
    return num2
  } else if  (num3>num1 && num3>num2) {
    return num3
  } else {
    console.log("There is not a biggest number.")
  } 
}

console.log(findTheBiggestNumber(18,18,3))

*/

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

let rangeMin1 = 40
let rangeMax1 = 60
let rangeMin2 = 70
let rangeMax2 = 100


const checkTheRange = function(n1, n2){
  if (n1 >= rangeMin1 && n2 >= rangeMin1 && n1 <= rangeMax1 && n2 <= rangeMax1) {
    console.log("the 2 numbers are in the range 40..60")
  } else if (n1 >= rangeMin2 && n2 >= rangeMin2 && n1 <= rangeMax2 && n2 <= rangeMax2) {
    console.log("the 2 numbers are in the range 70..100")
  } else {
    console.log("the 2 numbers are not both neither in the range 40..60 nor in the range 70..100")
  }
}
console.log(checkTheRange(22,75))
*/

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.

const newString = function(string1, numberOfCopies){
  let arrayOfStrings = []
  for (let i=0; i < numberOfCopies; i++){
    arrayOfStrings.push(string1)
  }
  let newStringofStrings = arrayOfStrings.join(' ')
  return newStringofStrings
}
console.log(newString("ciao", 4))
*/

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.

const displayCityName = function(cityName){
  let arrayOfCityName = cityName.split("")
  let newArrayOfCityName = []
  for (i=0; i<3; i++){
   newArrayOfCityName.push(arrayOfCityName[i])
  }
  let beginningOfCityName = newArrayOfCityName.join('')
  if (beginningOfCityName === "Los" || beginningOfCityName === "New"){
    return cityName
  } else {
    return ""
  } 
}
console.log(displayCityName("Modena"))

*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
// To check!


const elements = [1, 2, 4]
const sumOfElements = function(){
  let sum = 0
  if (elements.length === 3){
    for (i=0; i< elements.length; i++){
      sum = sum + elements[i]
      return sum
    }
  } else {
    console.log("the array doesn't have a length of 3")
  }
}

console.log(sumOfElements())
*/


/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 


const arrayOfInt = [1, 2]
const testArray = function(){
  if (arrayOfInt.length === 2){
    for (i=0; i<arrayOfInt.length; i++){
      if (arrayOfInt[i] === 1 || arrayOfInt[i] === 3){
        return true
      } else {
        return false
      }
    } 
  } else {
    console.log("the array doesn't have a lenght of 2")
  }
}
console.log(testArray())


*/
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3


const arrayOfInt = [1, 2]
const testArray = function(){
  if (arrayOfInt.length === 2){
    for (i=0; i<arrayOfInt.length; i++){
      if (arrayOfInt[i] !== 1 && arrayOfInt[i] !== 3){
        return true
      } else {
        return false
      }
    } 
  } else {
    console.log("the array doesn't have a lenght of 2")
  }
}
console.log(testArray())

*/

/*
11)
Create a function to find the longest string from a given array of strings.


const arrayOfStrings = ["first", "second", "third"]
const findTheLongestString = function(){
  for (i=0; i<arrayOfStrings.length; i++){
    let newArrayOfArray = arrayOfStrings[i].split('')    
  }
}
*/

/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/

/*
14)
Create a function to get the largest even number from an array of integers.
*/

/*
15)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/

/*
16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

/*
17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

/*
18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

*/

/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
