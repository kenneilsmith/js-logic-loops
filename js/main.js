// console.log('Ready to go');

// var myFname = 'Damian'; // String
// var toes = 10; // number
// var codes = true; //boolean
// var interests = ['food', 10, false]; // array
// var moreInfo = {
//   color: 'red',
//   cars: 1,
//   interest: ['cheese', 'ham']
// };
// // Function that returns something 
// function topSpeed() {
//   return 75;
// }

// console.log(topSpeed() * 2);

// // function can accept arguments that are then used as variables insde the function
// function addTen(numberOne) {
//   return numberOne + 10;
// }
// // invoking addTen, with a value for the numberOne argument
// console.log(addTen(10));

// // function that does something immediately
// function updateHeading(randomString) {
//   document.getElementById('head').innerText = randomString;
// }
// updateHeading(myFname);
// updateHeading('Smith');
// updateHeading(topSpeed());

// function fullName(fName, lName) {
//   document.getElementById('full-name').innerText = fName + ' ' + lName;
// }

// fullName('Damian', 'Smith');

// // Anon function stored in a var
// // var myGreatFunction = function () {
// //   return 'steve'
// // };
// var myGreatFunction = function () {
//   return 'steve'
// };

// console.log(myGreatFunction());

// document.getElementById('friends-name').innerText = myGreatFunction();

// var myName = 'Damian Smith';

// function showMyName(name) {
//   return name;
// }

// document.getElementById('name').innerText = showMyName(myName);

// function showProfilePic() {
//   return '<img src="img/photo1.png">';
// }

// document.getElementById('pic-link').innerHTML = showProfilePic();

// // 
// // var higher = 11;if (5 > 2) {
// //   // we will end up here if test is true
// //   console.log('we end up here, because 5 > 2');
// // }
// // var lower = 9;
// // if (higher < 10) {
// //   alert('your var is less than 10');
// // } else {
// //   alert('your var is ' + higher + ' was gerater than 10');
// // }
// // var mySrring = 'Testing';

// // if (mySrring === 'yourStrimg') {
// //   alert('your string is the same as mine');
// // } else {
// //   alert('your string is different than mine');
// // }


// For Loop
var beers = ['Lagunitas', 'Miller', 'Coors', 'Bud'];
var beersHtml = '';
for (var i = 0; i < beers.length; i++) {
  console.log(beers[i]);
  beersHtml = beersHtml + '<li>' + beers[i] + '</li>';
}
document.getElementById('js-beers').innerHTML = beersHtml;


// While Loop
let x = 6;
while (x < 10) {
  console.log(x);
  x++;
}

var names = ['Damian', 'Terry', 'Kenneil', 'Aneilia', 'Daniel', 'Brayden'];
var y = 0;

while (y < names.length) {
  console.log('I am friend with ' + names[y]);
  y++;
}
var heading = document.getElementById('title')
console.log(heading.innerText);

var name1 = 'Steve';
heading.innerText = 'Welcome ' + name1;
console.log(heading.innerText);

var secondHeader = document.getElementsByClassName('heading')[1];
secondHeader.innerText = 'I selected YOU and updated your text';

document.querySelector('.js-copy');

//add elements to your DOM.
// select them using different selectors
// change them and update your DOM

// returns first p.js-copy as object
var firstPara = document.querySelector('.js-copy');
firstPara.innerHTML = '<span style="color: red;">I replaced you</span>'

// return all p.js-copy's ad an array
var allPara = document.querySelectorAll('.js-copy');
allPara[1].innerText = 'Second para, I replaced you too';