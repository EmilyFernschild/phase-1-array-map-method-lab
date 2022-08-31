const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
 const newTutorials = tutorials.map((cb) => {
    const newSplitCase = cb
        .split(' ')
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ')
    return newSplitCase
 }) 
 return newTutorials 
}

 
 
// const titleCased = tutorials.map() => {
//   return tutorials;
// }


// const capitalizeFirstLetter = string => {
//   return string.charAt(0).toUpperCase() + string.slice(1) + string.split(" ");
// }

// tutorials.forEach(index => {
//   return capitalizeFirstLetter(index);
// }
// )


// const test = () => {
//   tutorials.forEach(index => {
//     console.log(capitalizeFirstLetter(index));
//  })
// }
// test()


// const titleCased = tutorials.map(capitalizeFirstLetter, index) => {
//   return tutorials.forEach(index => {
//     capitalizeFirstLetter(index)
//   });
// }
