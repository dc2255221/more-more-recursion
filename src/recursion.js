/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
var factorial = function(n) {
    // Base Case: if negative
    if (n < 0) { return null; }
    // Base Case: if 0
    if (n === 0) { return 1; } 
    // Recursive Case
    return (n * factorial(n-1));
};
// console.log(factorial(5)); // 120

// 2. Compute the sum of an array of integers.
var sum = function(array){
    // Base Case
    if (array.length === 0) { return 0; }
    // Recursive Case
    return array[0] + sum(array.slice(1));
}
// console.log(sum([1,2,3,4,5,6])); // 21

// 3. Sum all numbers in an array containing nested arrays.
var arraySum = function(array){
    // Base Case 
    if (array.length === 0){
        return 0;
    } // Recursive Case
    if (Array.isArray(array[0])){
         return arraySum(array.slice(1)) + arraySum(array[0]);
    } // Recursive Case
    return array[0] + arraySum(array.slice(1));
}
// console.log(arraySum([1,[2,3],[[4]],5])); // 15

// var arraySum = function(array) {
//     var sum = 0;
//     for (var i=0; i < array.length; i++){
//         // Recursive Case: if element is an array
//         if (Array.isArray(array[i])){
//             sum += arraySum(array[i]);
//         // Base Case: if element is a number    
//         } else {
//             sum += array[i];
//         }
//     } return sum;
// };

// 4. Check if a number is even.
var isEven = function(n) {
    // Base Case: if n is even
    if (n === 0) { return true; }
    // Base Case: if n is odd
    if (n === 1) { return false; }
    // Recursive Case: if n is positive
    if (n > 0) { return isEven(n-2); }
    // Recursive Case: if n is negative
    if (n < 0) { return isEven(n+2); }
};
// console.log(isEven(24)); // true
// console.log(isEven(17)); // false

// 5. Sum all integers below a given integer.
var sumBelow = function(n) {
    // Base Case: if n is 0
    if (n === 0) { return 0; }
    // Recursive Case: if n is positive
    if (n > 0) { return n-1 + sumBelow(n-1); }
    // Recursive Case: if n is positive
    if (n < 0) { return n+1 + sumBelow(n+1); }
}
// console.log(sumBelow(10)); // 45
// console.log(sumBelow(7)); // 21

// 6. Get the integers within a range (x, y).
var range = function(x, y) {
    // Base Case: if difference btw y and x is 0 or 1
    if (y-x === 1 || y-x === 0 || x-y === 1 || x-y === 0) {
        return [];
    // Base Case: if difference btw y and x is 2    
    } if (y-x === 2) {
        return [x+1];
    // Base Case: if difference btw y and x is -2
    } if (y-x === -2) {
        return [x-1];
    // Recursive Case: if difference btw y and x is greater than 2 
    } if (y-x > 2) {
        return range(x, y-1).concat([y-1]);
    // Recursive Case: if difference btw y and x is less than -2
    } if (y-x < -2) {
        return range(x, y+1).concat([y+1]);
    }
};
// console.log(range(2, 9)); // [3,4,5,6,7,8]

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    // Base Case
    if (exp === 0) { 
        return 1; 
    } else if (exp > 0) { // Recursive Case: if exp is positive
        return base * exponent(base, exp - 1); 
    } else { // Recursive Case: if exp is negative
        return ( 1/base * exponent(base, exp + 1).toFixed(4)); 
    }
};
// console.log(exponent(4, 3)); // 64

// 8. Determine if a number is a power of two.
var powerOfTwo = function(n) {
    // Base Case
    if (n === 1) { return true; }
    // Base Case
    if (n < 1) { return false; }
    // Recursive Case
    return powerOfTwo(n/2);
};
// console.log(powerOfTwo(1)); // true
// console.log(powerOfTwo(16)); // true
// console.log(powerOfTwo(10)); // false

// 9. Write a function that reverses a string.
var reverse = function(string) {
    // Base Case
    if (string === "") { return string; } 
    // Recursive Case
    return reverse(string.substring(1)) + string.charAt(0);
};
// console.log(reverse('Donald Chen'));


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.toLowerCase();
    // Base Case
    if (string.length === 0 || string.length === 1) { return true; }
    // Base Case
    if (string[0] !== string[string.length-1]) { return false; }
    // Recursive Case
    return palindrome(string.substring(1, string.length-1));
};
// console.log(palindrome('abcdeedcba')); // true
// console.log(palindrome('abcdefdcba')); // false

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.

var modulo = function(x, y) {
    // Base Case: if no remainder
    if (x - y === 0) {
        return 0; 
    } // Base Case: if difference btw x and y is less than y
    if (x - y < y) {
        return x - y;
    } // Recursive Case: if difference btw x and y is greater than y
    if (x - y > y) {
        return modulo(x - y, y); 
    }
};
// console.log(modulo(5, 2));  // 1
// console.log(modulo(17, 5)); // 2
// console.log(modulo(22, 6)); // 4

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    // Base Case
    if (x === 0 || y === 0){
        return 0;
    // Recursive Case
    } if (y > 0) {
        return x + multiply(x, y-1);
    // Recursive Case
    } if (y < 0) {
        return -x + multiply(x, y+1);
    }
};
// console.log(multiply(7, 0));
// console.log(multiply(3, 4)); 
// console.log(multiply(-5, 9));
// console.log(multiply(4, -2));
// console.log(multiply(-7, -4));

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    // Base Case
    if (x === 0){
        return 0;
    // Base Case 
    } else if (y === 0){
        return undefined;
    // Recursive Case:
    } else if (x < y && x > 0 && y > 0 || -x < -y && x < 0 && y < 0){
        return 0;
    // Recursive Case: if both x & y are positive or negative
    } else if (x > 0 && y > 0 || x < 0 && y < 0){
        return 1 + divide(x-y, y);  
    // Recursive Case: if one is positive and the other is negative
    } else if (x > 0 && y < 0 || x < 0 && y > 0) {
        return -1 + divide(x+y, y);
    }
};
// console.log(divide(0, 6)); // 0
// console.log(divide(5, 0)); // undefined 
// console.log(divide(4, 2)); // 2
// console.log(divide(6, -2)); // -3
// console.log(divide(-12, 3)); // -4
// console.log(divide(-22, -11)); // 2
// console.log(divide(3, 12)); // 0
// console.log(divide(9, 12)); // 1
// console.log(divide(5, 2)); // 2
// console.log(divide(-16, 5)); // -4

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) { 
    // // Base Case: x > y and no remainder
    // if (x % y === 0){
    //     return y;
    // } // Base Case: y > x and no remainder
    // if (y % x ===  0){
    //     return x;
    // } // Recursive Case
    // if (x > y && x % y !== 0){
    //     return gcd(x, y-1);
    // } // Recursive Case
    // if (x < y && y % x !== 0){
    //     return gcd(x-1, y);
    // }
    if (y === 0){
        return x;
    } return gcd(x, x % y);
};
// console.log(gcd(4, 36)); // 4

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
var compareStr = function(str1, str2){
    // Base Case: if str1 and str2 have length of 0
    if (str1.length === 0 && str2.length === 0) {
        return true; 
    } // Base Case: if first char in str1 and str2 are not equal
    if (str1[0] !== str2[0]) {
        return false;
    } // Recursive Case
    return compareStr(str1.substring(1), str2.substring(1));
}
// console.log(compareStr('house', 'houses')); // false
// console.log(compareStr('tomato', 'tomato')); // true

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
    // Base Case
    if (str.length === 0){
        return [];
    } // Recursive Case
    return [str[0]].concat(createArray(str.substring(1)));
}

// var createArray = function(str) {
//     //  Base Case: 
//     if (str ===  "") {
//         return [];
//     } // Recursive Case
//     arr = createArray(str.substring(0, str.length-1))
//     arr.push(str.charAt(str.length-1));
//     return arr;
// };

// console.log(createArray("donald")); // ["d", "o", "n", "a", "l", "d"]

// 17. Reverse the order of an array
var reverseArr = function(array){
    if (array.length === 0){
        return array;
    }
    return reverseArr(array.slice(1)).concat(array[0]);  
}

// var reverseArr = function(array) {
//     // Base Case
//     if (array.length === 0){
//         return [];
//     } // Recursive Case
//     reversed = reverseArr(array.slice(1));
//     reversed.push(array[0]);
//     return reversed; 
// };

// console.log(reverseArr([1, 2, 3, 4, 5, 6]));  // [6, 5, 4, 3, 2, 1]

// 18. Create a new array with a given value and length.
var buildList = function(value, length) {
    if (length === 0) {
        return [];
    }
    return [value].concat(buildList(value, length-1));
}

// var buildList = function(value, length) {
//     if (length === 0){
//         return [];
//     }
//     arr = buildList(value, length-1);
//     arr.push(value);
//     return arr;
// };

// console.log(buildList(0,5)); // [0,0,0,0,0]
// console.log(buildList(7,3)); // [7,7,7]

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
var fizzBuzz = function(n) {
    var results = [];
    // Base Case
    if (n === 0){
        return results;
    } // Recursive Case
    if (n % 3 === 0 && n % 5 !== 0){
        results.push('Fizz');
    } // Recursive Case
    if (n % 3 !== 0 && n % 5 === 0){
        results.push('Buzz');
    } // Recursive Case
    if (n % 3 === 0 && n % 5 === 0){
        results.push('Fizz Buzz');
    } // Recursive Case
    if (n % 3 !== 0 && n % 5 !== 0){
        results.push(n.toString());
    }
    return fizzBuzz(n-1).concat(results);
};
// console.log(fizzBuzz(5)); // ['1','2','Fizz','4','Buzz']

// 20. Count the occurence of a value in a list.
var countOccurrence = function(array, value) {
    // Base Case
    if (array.length === 0){
        return 0;
    } if (array[0] !== value) { // Recursive Case: if index is value  
        return 0 + countOccurrence(array.slice(1), value);
    } if (array[0] === value) { // Recursive Case: if index is not value
        return 1 + countOccurrence(array.slice(1), value);
    }
};
// console.log(countOccurrence([2, 7, 4, 4, 1, 4], 4)); // 3
// console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')); // 2

// 21. Write a recursive version of map.
var rMap = function(array, callback) {
    if (array.length === 0) {
        return array;
    } 
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
}

// var rMap = function(array, callback) {
//     // Base Case
//     if (array.length === 0){
//         return [];
//     } // Recursive Case
//     mapped = rMap(array.slice(0, -1), callback);
//     mapped.push(callback(array[array.length-1]));
//     return mapped;
// };

// console.log(rMap([1, 2, 3], function(x){return x * 2})); // [2,4,6] 

// 22. Write a function that counts the number of times a key occurs in an object.
var countKeysInObj = function(obj, key) {
    var count = 0;
    for (var prop in obj){
        // Base Case
        if (prop === key){
            count++;
        } // Recursive Case
        if (typeof obj[prop] === 'object'){
            count += countKeysInObj(obj[prop], key);
        }
    } return count;
};

// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// console.log(countKeysInObj(obj, 'r')); // 1
// console.log(countKeysInObj(obj, 'e')); // 2

// 23. Write a function that counts the number of times a value occurs in an object.
var countValuesInObj = function(obj, value) {
    var count = 0;
    for (var key in obj){
        // Base Case
        if (obj[key] === value){
            count ++;
        }
        // Recursive Case
        if (typeof obj[key] === 'object'){
            count += countValuesInObj(obj[key], value);
        }
    } return count;
};
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// console.log(countValuesInObj(obj, 'r')); // 2
// console.log(countValuesInObj(obj, 'e')); // 1

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
var fibonacci = function(n) {
    // Base Case
    if (n === 0) { 
        return [0];
    } // Base Case
    if (n === 1) { 
        return [0, 1];
    } // Recursive Case
    if (n > 1) { 
    arr = fibonacci(n-1);
    arr.push(arr[n-1] + arr[n-2]);
    return arr;
    }
}
// console.log(fibonacci(5)); // [0,1,1,2,3,5]

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
var nthFibo = function(n) {
    var arr = [0, 1];
    // Base Case
    if (n === 0){
        return arr[0];
    } // Base Case
    if (n === 1) {
        return arr[1];
    } // Recursive Case    
    if (n > 1) { 
        arr = fibonacci (n-1);
        arr.push(arr[n-1] + arr[n-2]);
        return arr[n];
    }
};
// console.log(nthFibo(5)); // 5
// console.log(nthFibo(7)); // 13
// console.log(nthFibo(3)); // 2

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    var result = [];
    // Base Case
    if (array.length === 0){
        return result;
    } // Recursive Case
    result.push(array[0].toUpperCase());
    result = result.concat(capitalizeWords(array.slice(1)));
    return result;
};
// var words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words));

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    var result = [];
    // Base Case
    if (array.length === 0){
        return result;
    } // Recursive Case
    result.push(array[0].charAt(0).toUpperCase().concat(array[0].slice(1)));
    result = result.concat(capitalizeFirst(array.slice(1)));
    return result;
};
// console.log(capitalizeFirst(['car','poop','banana']));


// 29. Return the sum of all even numbers in an object containing nested objects.
var nestedEvenSum = function(obj) {
    if (obj.length === 0){
        return 0;
    }
    var sum = 0;
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } 
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    } return sum; 
};

// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// console.log(nestedEvenSum(obj1)); // 10

// 30. Flatten an array containing nested arrays.
var flatten = function(array) {
    // Base Case
    if (array.length === 0){
        return array;
    } // Recursive Case: if first index is not an Array
    if (!Array.isArray(array[0])){
        return [array[0]].concat(flatten(array.slice(1)));
    } else { // Recursive Case: if first index is an Array
        return flatten(array[0]).concat(flatten(array.slice(1)));
    }
};
// console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5]

// 31. Given a string, return an object containing tallies of each letter.
var letterTally = function(str, obj = {}) {
    // Base Case
    if (str.length === 0){
        return obj;
    } // Recursive Case
    if (obj[str[0]] === undefined){ // if letter not in obj yet
       obj[str[0]] = 1;
    } else { // if letter already in obj
        obj[str[0]] ++;
    }
    return letterTally(str.substring(1), obj);
};
// console.log(letterTally('potato')); // {p:1, o:2, t:2, a:1}

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
var compress = function(list) {
    // Base Case
    if (list.length === 0){
        return list;
    } // Recursive Case
    if (list[0] === list[1]){
        return compress(list.slice(1));
    } // Recursive Case
    if (list[0] !== list[1]){
        return [list[0]].concat(compress(list.slice(1)));
    }
};
// console.log(compress([1,2,2,3,4,4,5,5,5]));  // [1,2,3,4,5]
// console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4]));  // [1,2,3,4,2,5,4]

// 33. Augment every element in a list with a new value where each element is an array
// itself.
var augmentElements = function(array, aug) {
    // Base Case
    if (array.length === 0){
        return array;
    } // Recursive Case
    return [array[0].concat([aug])].concat(augmentElements(array.slice(1)), aug)
};
// console.log(augmentElements([[],[3],[7]], 5));  // [[5],[3,5],[7,5]]


// 34. Reduce a series of zeroes to a single 0.
var minimizeZeroes = function(array){
    // Base Case
    if (array.length === 0){
        return array;
    } // Recursive Case: if first index not a 0 
    if (array[0] !== 0) {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    } // Recursive Case: if first index is a 0 but second index is not 
    if (array[0] === 0 && array[1] !== 0) {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    } // Recursive Case: if both first and second index is a 0 
    if (array[0] === 0 && array[1] === 0) { 
        return minimizeZeroes(array.slice(1));
    }
}
// console.log(minimizeZeroes([2,0,0,0,1,4]));  // [2,0,1,4]
// console.log(minimizeZeroes([2,0,0,0,1,0,0,4]));  // [2,0,1,0,4]

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
var alternateSign = function(array) {
    // Base Case
    if (array.length === 0){
        return array;
    // Recursive Cases
    } if (array[0] < 0){
        array[0] = -array[0];
    } if (array[1] > 0){
        array[1] = -array[1];
    } 
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));  
};
// console.log(alternateSign([2,7,8,3,1,4]));   // [2,-7,8,-3,1,-4]
// console.log(alternateSign([-2,-7,8,3,-1,4]));  // [2,-7,8,-3,1,-4]

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
var numToText = function(str) {
    var nums = {'1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'}
    // Base Case
    if (str.length === 0){
        return str;
    } // Recursive Case
    if (nums[str[0]]) {
        return nums[str[0]].concat(numToText(str.substring(1)));
    } // Recursive Case
    if (nums[str[0]] === undefined){
        return str[0].concat(numToText(str.substring(1)));
    } 
};
// console.log(numToText("I have 5 dogs and 6 ponies"));  // "I have five dogs and six ponies"


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
    
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};


if (typeof window !== 'object') {
    var mergeObj = {
      factorial: factorial,
      sum: sum,
      arraySum: arraySum,
      isEven: isEven,
      sumBelow: sumBelow,
      range: range,
      powerOfTwo: powerOfTwo,
      palindrome: palindrome,
      reverse: reverse,
      exponent: exponent
    }
  
    Object.assign(global, mergeObj);
  }