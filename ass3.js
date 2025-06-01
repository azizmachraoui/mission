/************************************************1**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************2**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************3**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************4**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************5**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************6**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************7**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************8**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************9**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
/************************************************10**************************************************** */
// Remember to relax :

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// *********************Part One************************

//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note:  you should add the power attribute in your computer object that accept a boolean as value, by default is false

function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight,
    power: false // default value for power
  };

    // TODO: Your code here

}
// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' +computer.type + ', color: ' + computer.color + ', weight: ' + computer.weight + ',power: ' + computer.power ;
   // TODO: Your code here
}

// *********************Part Tow************************

// Creating a model class OperateComputer to perform simple tasks on a computer.
// The class should have:
// *** a computer property that accepts an object as a value. You can use the makeComputer factory function to create the computer object.
// *** powerOn method
// *** powerOff method
// *** displayComputer method

function OperateComputer(type, color, weight) {
var instance={}
instance.type = type;
instance.color = color;
instance.weight = weight;
instance.power = false;
instance.powerOn=powerOn;
instance.powerOff=powerOff;
instance.displayComputer=displayComputer;
return instance;
}
var powerOn = function() {
  this.power = true;
  return "Your " + this.type + " computer is running. Power is on.";
}
var powerOff = function() {
  this.power = false;
  return "Your " + this.type + " computer is shutting down. Power is off.";
}
var displayComputer = function() {
  return 'Type: ' + this.type + ', Color: ' + this.color + ', Weight: ' + this.weight + ', Power: ' + this.power;
}


var apple = OperateComputer("Apple", "White", 500);
apple.displayComputer(); // => "Type: Apple, Color: White, Weight: 500, Power: false"

// powerOn should switch the power property to true
apple.powerOn(); // => "Your Apple computer is running. Power is on."

// powerOff should switch the power property to false
apple.powerOff(); // => "Your Apple computer is shutting down. Power is off."

/*=======================================================================
                                        Q2                               
======================================================================= */

/**
 * Complete the function `makeSentence` with closure.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */
var makeSentence = function (sentence) {
  var current = sentence;
  return function(word) {
    if (typeof word === 'undefined') {
      return current;
    }
    current += ' ' + word;
    return current;
  }
}

  // TODO: your code here


/*=======================================================================
                                            Q3                              
 ======================================================================= */

// Using recursion, write a function called joinRecursion that takes array of strings and join them in one string representing how many times the string str should be repeated.

joinRecursion(["don't ", " use ", " loops. "]); // => "don't use loops. "
function joinRecursion(arr) {
  if (arr.length === 0) {
    return "";
  }
  return arr[0] + joinRecursion(arr.slice(1));
}

//=======================================================================
/*                                  Q4                               */
//=======================================================================

//using Recursion Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
function isEven(nbr) {
  if (nbr === 0) {
    return "0 is an even number";
  } else if (nbr === 1 || nbr === -1) {
    return nbr + " is an odd number";
  } else if (nbr < 0) {
    return isEven(-nbr);
  } else {
    return isEven(nbr - 2);
  }
  // TODO: your code here
}
