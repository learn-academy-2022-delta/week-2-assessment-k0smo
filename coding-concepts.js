// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: because of .split each letter in the string will  index seperatly 
// b) Verify and explain: each letter in the string is split word for word as shown ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '2'] because of .split.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined    
// b) Verify and explain:undefined thinking because name is not defined.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:each number in the array will be multiplied by 2 because of the .map each number in the array multiplies by 2. 
// b) Verify and explain: each number in the array is multiplied by 2 output: by using .map to iterate the array. (5) [8, 10, 12, 14, 16]



// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: the variable only odds will filter out the odd numbers only.
// b) Verify and explain: odd numbers are seperated from the array because of the .filter output: [11, 13, 15]


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: the javascript string will be seperated from the languages because of the number 0 in the console languages
// b) Verify and explain: output "Javascript" the console log has the variable high order function the languages index number 0.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George will be added to the sentence George Bravo 2022
// b) Verify and explain: the sequence student George cohort Brave year 2022 was returned.
