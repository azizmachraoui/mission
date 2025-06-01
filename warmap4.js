/****************************************1****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}
/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/***********************************2************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************3****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************4****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************5****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************6****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************7****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************8****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************9****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************10****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************11****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************12****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}
/****************************************13****************************************************** */

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************14****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************15****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************16****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************17****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}


/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************18****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************19****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************20****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************21****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************22****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************23****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************24****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************25****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************26****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************27****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************28****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************29****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************30****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************31****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************32****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************33****************************************************** */
v

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************34****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************35****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************36****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************37****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************38****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************39****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************40****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************41****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************42****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************43****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************44****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************45****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************46****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************47****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************48****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************49****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************50****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************51****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************52****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************53****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************54****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************55****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************56****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************57****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************58****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************59****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

/****************************************60****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************61****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************62****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************63****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************64****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************65****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************66****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************67****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************68****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************69****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************70****************************************************** */

v/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************71****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************72****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************73****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************74****************************************************** */

/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************75****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************76****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************77****************************************************** */


/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************78****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************79****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************80****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************81****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************82****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************83****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************84****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************85****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************86****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************87****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************88****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************89****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************90****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************91****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************92****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************93****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************94****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************95****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************96****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************97****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************98****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************99****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}
/****************************************100****************************************************** */
/**
 * 1- Write a function named `findIndexOf` that takes an array and a value as arguments
 * and returns the index of the value in the array. If the value is not found, return -1.
 */
function findIndexOf(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return i
        }
    }
    return -1
}
/**
 * 2- Write a function named `containsValue` that takes an array and a value as arguments
 * and returns `true` if the value is in the array, otherwise returns `false`.
 */
function containsValue(arr, value) {
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            return true
        }
    }
    return false
}
/**
 * 3- Write a function named `removeElement` that takes an array and a value as arguments
 * and returns a new array with the first occurrence of the value removed. If the value is not found, return the original array.
 */
function removeElement(arr, value) {
    var newArr = [];
    var found = false;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value && !found){
            found = true; // Skip the first occurrence
        } else {
            newArr.push(arr[i]); // Add the element to the new array
        }
    }
    return newArr; // Return the modified array
     
}

/**
 * 4- Write a function named `countOccurrences` that takes an array and a value as arguments
 * and returns the number of times the value occurs in the array.
 */
function countOccurrences(arr, value) {
    var count = 0;
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]===value){
            count = count + 1; // Increment the count for each occurrence
        }
    }
    return count; // Return the total count
}

