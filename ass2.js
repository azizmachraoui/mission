/*********************************************************1**************************************************** */
// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
  /*****************************************************2************************************************** */
  // Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************3************************************************** */
    // Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************4************************************************** */
    // Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************5************************************************** */
    // Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************6************************************************** */
    // Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************7************************************************** */
    // Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************8************************************************** */
    // Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************9************************************************** */
    // Remember to relax :)// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here
    /*****************************************************10************************************************** */
    // Remember to relax :)// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + 1);
    i++;
  }
  return newArray;
}

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther() {
  var myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
 
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//=======================================================================
/*                                  Q4                                 */
//=======================================================================

/* 
write a Tv class that has the the following properties :
channelNumber ==> the is number of the current channel on the screen defaults to 0
and these methods : 
watch ==> takes no params and displays a message of the curent channel number
changeChannel ==> take a channelNumber (number) and switches the channel to that number 

 var myTv = Tv()
 myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
 myTv.watch() //=> "you are now watching channel #0"
 myTv.changeChannel(5) //=>  "switched to channel #5"
 myTv.channelNumber //=> 5 
 myTv.watch() //=> "you are now watching channel #5"
*/
function Tv() {
  var instance = {}
  instance.channelNumber = 0;
  instance.watch = watch;
  instance.changeChannel = changeChannel;
  return instance;
}

function watch() {
  return "you are now watching channel #" + this.channelNumber;
}

function changeChannel(channelNumber) {
  this.channelNumber = channelNumber;
  return "switched to channel #" + channelNumber;
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

//******************************************bonus exercises**************************************************** */
//******************************************Dragon level**************************************************** */
//=======================================================================
/*                                  Q6                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
  return a.includes(x);
}

//=======================================================================
/*                                  Q7                                 */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: please write one or two lines here describing your solution.
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  }
  if (nbr < 0) {
    return isEven(-nbr);
  }
  if (nbr === 1) {
    return "1 is an odd number";
  }
  return isEven(nbr - 2);
}
  // TODO: your code here