// var myHeading = document.querySelector('h1')
// myHeading.innerHTML = 'Hello world!';

// var myP = document.querySelector('p')
// myP.innerHTML = '段落'

// var fruit = 'banana'
// if (fruit === 'banana') {
//   alert('I like');
// } else {
//   alert('I dislike');
// }

// function multiply(num1,num2) {
//   var result = num1*num2;
//   return result;
// }

// document.querySelector('html').onclick = function(){
//   alert('网页被 click')
// }

var myImage = document.querySelector('img');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/1.jpg') {
    myImage.setAttribute('src','images/2.jpg');
  } else {
    myImage.setAttribute('src','images/1.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name',myName);
  myHeading.innerHTML = 'Mozilla is cool,' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool,' + storedName;
}

myButton.onclick = function () {
  setUserName();
}
