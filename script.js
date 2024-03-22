function checkEligibilityForVoting(age){
  if (age>=18){
    return "you are eligible to vote";
  }
}
let age = 20;
console.log(checkEligibilityForVoting(age));// function call

age = 16;
console.log(checkEligibilityForVoting(age));// Function call

//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
let base = 5;
let height = 7;
let width = 6;

function calculateTriangleArea(base, height, width){
  let s = (base + height + width) /2;
  let area = math.sqrt(s*(s-base)* (s-height)*(s-width));
  return 'the area of the triangle is'; +area;
}
console.log(calculateTriangleArea(base, height, width));