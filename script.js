function checkEligibilityForVoting(age) {
  if (age >= 18) {
    return "you are eligible to vote";
  }
}
let age = 20;
console.log(checkEligibilityForVoting(age)); // function call

age = 16;
console.log(checkEligibilityForVoting(age)); // Function call

//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
let base = 5;
let height = 7;
let width = 6;

function calculateTriangleArea(base, height, width) {
  let s = (base + height + width) / 2;
  let area = math.sqrt(s * (s - base) * (s - height) * (s - width));
  return "the area of the triangle is";
  +area;
}
console.log(calculateTriangleArea(base, height, width));

//JAVA SCRIPT REFRESHER FOR REACT BY PABLO
// 1. Normal js function
export default DoSomething();
{
  console.log("Hello Juma");
}

// 2. Arrow functions
export const DoSomething = () => {
  const name = "juma";
};

//3. Anonymous functions
<button
  onClick={() => {
    console.log("I love writting JS functions!");
  }}
></button>;

// Normal conditions using else if statements
const Age = 18;
let name = "Juma";
if (Age < 18) {
  console.log(`${name} allowed to vote`);
} else {
  console.log(`${name} Not Allowed to vote!`);
}

// Ternery Operators are used as short hand notation for if else statements
let votingAge = 18;
let Name = votingAge > 18 ? "Juma" : "Jack";
console.log(`The person can vote`);

let vote = 18;
let win = vote > 18 ? "Yes" : "No";
console.log("winnner goes to Africa");

const number = 18;
let aGe = number > 18 ? "true" : "false";
console.log(aGe); // aGe
