// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("numsTimesThree", () => {
    it("takes in an array of numbers and returns an array with all the numbers multipled by 3.", () => {
      expect(numsTimesThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(numsTimesThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })

// b) Create the function that makes the test pass.

const numsTimesThree = (array) => {
    return array.map(value => {
        return value * 3
})
}
    



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
describe("divisibleByThree", () => {
   let num1 = 15
   let num2 = 0
   let num3 = -7 
    it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
      expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
      expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
      expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
     
    })
  })



// a) Create a test with expect statements for each of the variables provided.


//Psuedocode: const num1 is 15, var is index equal 15, if modulo 3, alert 15 is divisible by 3
// const num1 = 15
// // Expected output: "15 is divisible by three"
// var i =15;
// if (i % 3 == 0) {
//  return("15 is divisible by 3");
// } 

// // const num2 is 0, var is index equal 0, if modulo 3, alert 0 is divisible by 3
// const num2 = 0
// // Expected output: "0 is divisible by three"
// var i =0;
// if (i % 3 == 0) {
//  return("0 is divisible by 3");
// } 

// // const num3 is -7, var is index equal 0, if modulo 3, alert 0 is divisible by 3
// const num3 = -7
// // Expected output: "-7 is not divisible by three"
// var i =0;
// if (i % 3 == 0) {
//  return("-7 is not divisible by 3");
// } 

// b) Create the function that makes the test pass.


//Input is a number. 
 //create an if statement that evaluates the variable  the input using modulo three.
 //Return the string whether the number is divisible by three or not.`
 //if num %3 = 0 then num is divisible by three.

 const divisibleByThree = (numbers) => {
    if (numbers % 3 == 0) {
        return `${numbers} is divisible by three`;
    } else {
        return `${numbers} is not divisible by three`;
    }
}




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("allCaps", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
   
     it("takes in an array of words and returns an array with all the words capitalized.", () => {
       expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
       expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
     })
   })


//const randomnouns1 function capitalized array return map for each iteration. element to uppercase and substring to lowercase console log capitalized string.
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

// function capitalized(arr) {
//     return arr.map(element => {
//       return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//     });
//   }



//   console.log(capitalized(["streetlamp", "potato", "teeth", "conclusion", "nephew"]))

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

//const randomnouns2 function capitalized array return map for each iteration. element to uppercase and substring to lowercase console log capitalized string.

// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// function capitalized(arr) {
//     return arr.map(element => {
//       return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//     });
//   }
  
 
//   console.log(capitalized(["temperature", "database", "chopsticks", "mango", "deduction"]))


// b) Create the function that makes the test pass.
// Psuedocode
// refactored function based on test.
const allCaps = (arr) => {
    return arr.map(noun => {
      return noun.charAt(0).toUpperCase() + noun.substring(1).toLowerCase();
    });
  }


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2
describe("vowelTest", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
     it("takes in a string and logs the index of the first vowel.", () => {
       expect(vowelTest(vowelTester1)).toEqual(1)
       expect(vowelTest(vowelTester2)).toEqual(0)
       expect(vowelTest(vowelTester3)).toEqual(2)
     
     })
   })

// b) Create the function that makes the test pass.

// funtion first vowel string, let new string = string split, for new string .length if new string vowels are seperated return the first vowel index of 1.


//Return the Index of the First Vowel
// funtion vowelTest, let new string = string split, for new string
// for- i start at 0, it iterates the length of new string i++, vowels are seperated.
//return the first vowel index of 0.

function vowelTest (str) {
    let newstr = str.split('');
    for(i=0; i<newstr.length; i++){
        if(newstr[i] == 'a'  || newstr[i] == 'e' || newstr[i] == 'i' || newstr[i] == 'o' | newstr[i] == 'u' || newstr[i] == 'A'  || newstr[i] == 'E' || newstr[i] == 'I' || newstr[i] == 'O' | newstr[i] == 'U') {
            return i;
        }
    }
}


