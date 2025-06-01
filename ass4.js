/***************************************************1******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************2******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************3******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************4******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************5******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************6******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************7******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************8******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************9******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
/***************************************************10******************************************** */

// ******************************useful functions***********************************************

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


//=============================================================================
/*                                  Q1                                    */
//=============================================================================

//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397,
  },
  {
    country: "India",
    population: 1339180127,
  },
  {
    country: "USA",
    population: 324459463,
  },
  {
    country: "Indonesia",
    population: 263991379,
  },
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function(predicate){
    return predicate.country && predicate.population>500000000
  
      
    })
  }
  // TODO: your code here


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//solve it using one of the most appropriate helpers functions(each,map,filter).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: This solution uses the map helper to return a new array with each number divided by 2.



function halveAll(numbers) {
  return map(numbers, function(num) {
    return num / 2;
  })
}



  // your code is here


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {

  // your code is here
}

//=============================================================================
/*                                  Q4                                       */
//=============================================================================


/*OOP Car
Create a MakeCar class by using OOP concept, where: Your class should have:

numberOfPasengers: number for the number of passengers currently in the car (starts as 0).
maximumNumberPassangers: number for the maximum number of passengers that the car can hold (taken as a parameter).
fuel: number for how many gallons of fuel in the car (taken as a parameter).
counter: number for the number of miles the car has traveled (start as 0).
mount: function that:
increases the number of passengers in the car by one.
returns "no more space" if you try to mount an extra passenger.
dismount: function that:
decrement the number of passengers by one.
returns "no one left" if you try to dismount with no passengers.
run: function that:
accepts how many miles to go as a parameter.
increases the miles property to how many miles traveled.
decreases the amount of fuel needed to travel (1 gallon = 1 mile).
returns "not enough fuel" if the fuel is not enough for the inputted distance.
returns "no driver" if the number of passengers is 0.
Available Resources for this Prompt*/
function Car(maximumNumberPassangers, fuel){
    var car={}
    car.numberOfPasengers = 0
    car.counter=0
    car.maximumNumberPassangers = maximumNumberPassangers
    car.fuel = fuel
    car.mount=mount
    car.dismount=dismount
    car.run=run 
    return car;
}
var mount=function(){
    if(this.numberOfPasengers<this.maximumNumberPassangers){
        this.numberOfPasengers=this.numberOfPasengers+1
        return numberOfPasengers
    }
    console.log("no more space")

}
var dismount=function(){
    if(this.numberOfPasengers>0){
        this.numberOfPasengers=this.numberOfPasengers-1
        return numberOfPasengers
    }
    console.log("no one left")

}
var run=function(){
    if(this.numberOfPasengers>0){
        if(this.fuel>0){
            this.counter=this.counter+1
            this.fuel=this.fuel-1
            return counter
        }
        console.log("not enough fuel")
    }
    console.log("no driver")
}




  // TODO: your code here!

/* ***************************************************************************************/
// Q5
/* ***************************************************************************************/

function greatestCommonDivisor(number1, number2) {
  var num = number2
  if (number2 !== 0) {
    number2 = number1 % number2;
    number1 = num 
  }
  return number1
}


//  greatestCommonDivisor(50, 120) -> 10
//  greatestCommonDivisor(24, 54) -> 6
        