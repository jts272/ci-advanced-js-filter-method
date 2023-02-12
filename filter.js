/**
 * To run this file in Gitpod, use the
 * command node filter.js in the terminal
 */

// Simple Filtering
const people = [
  {
    name: "Michael",
    age: 23,
  },
  {
    name: "Lianna",
    age: 16,
  },
  {
    name: "Paul",
    age: 18,
  },
];

// Create new array for people of US drinking age:

// console.log(people.filter((person) => person.age >= 21));

// Get just the 'Paul' object from the array using filter():

const paul = people.filter((p) => p.name === "Paul");
// console.log(paul);

// Remember that the param 'p' in the callbackfn represents each array index!
// Refactored the semantic 'person' simply to 'p'.

// filter() will always return an array, even if it is of just one element.
const justPaul = people.filter((p) => p.name === "Paul")[0]; // <--!
// console.log(justPaul);
// note the array index of [0] after the callbackfn expression.

// Complex Filtering
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skills: [
      { name: "javascript", yrsExperience: 1 },
      { name: "html", yrsExperience: 5 },
      { name: "css", yrsExperience: 3 },
    ],
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skills: [
      { name: "javascript", yrsExperience: 0 },
      { name: "html", yrsExperience: 4 },
      { name: "css", yrsExperience: 2 },
    ],
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skills: [
      { name: "javascript", yrsExperience: 1 },
      { name: "html", yrsExperience: 1 },
      { name: "css", yrsExperience: 5 },
    ],
  },
];

// Filter only students >= 5 yrs experience in at least 1 skill:

// const candidates = students.filter((student) => {
//   // We then create a var to filter the inner 'students[student].skills array:
//   let strongSkills = student.skills.filter((skill) => skill.yrsExperience >= 5);
//   // console.log(strongSkills) // returns empty array for failing items
//   // console.log(strongSkills.length > 0)
//   // only return the truthy values
//   return strongSkills.length > 0;
// });

// console.log(candidates);

// Refactor the inner callbackfn to its own var so that it can be passed around:

// const hasStrongSkills = (student) => {
//   let strongSkills = student.skills.filter((skill) => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// };

//console.log(students.filter(hasStrongSkills));

// ---------------------------------------------------------------------

// Further refactor the hasStrongSkill's callbackfn to its own var:

// This anonymous/lambda function does nothing by itself and is passed in as a
// filter method.
const has5yrsExp = (skill) => skill.yrsExperience >= 5;

const hasStrongSkills = (student) =>
  student.skills.filter(has5yrsExp).length > 0;

const candidates = students.filter(hasStrongSkills);

console.log(candidates);

// Can be simpler to write the callbackfn first, then pass that into the filter
// method.

// map() the candidates objects array to show just the array of names:

const candidateNames = candidates.map((candidate) => candidate.name);
console.log(candidateNames);
