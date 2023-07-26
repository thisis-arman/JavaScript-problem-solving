//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.


// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseStr(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
  return reversed;
}
const result = reverseStr("Hello World");
console.log(result);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveNum(arr) {
  const filterPositiveNum = arr.map((num) => num > 0 && num);
  const sum = filterPositiveNum.reduce((pre, current) => pre + current, 0);
  return sum;
}
const arr = [2, -5, 10, -3, 7];
const total = sumOfPositiveNum(arr);
console.log(total);



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(arr) {


  let frequencyCounter = {};
  let maxFrequency = 0;
  let mostFrequentElement = null;

  // Count the frequency of each element in the array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    
    if (frequencyCounter[element] > maxFrequency) {
      maxFrequency = frequencyCounter[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

// Example Input
const inputArray1 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
// Example Output
const total1 = findMostFrequentElement(inputArray1);
console.log(total1); //



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


function findTwoNumbersWithSum(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // If no such pair is found
}


const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

const result2 = findTwoNumbersWithSum(inputArray, targetValue);
console.log(result2); 




// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error('Invalid operator. Please use one of the following: +, -, *, /');
  }
}

// Example Input
const number1 = 10;
const operation = '*';
const number2 = 5;

// Performing the calculation
const result3 = calculator(number1, operation, number2);

// Example Output
console.log(result3); // Output: 50 (10 * 5)


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Example usage to generate a password of length 10
const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);

// Example Output
console.log(randomPassword); // Output: h9@Zv$qPj1


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumerals[romanNumeral[i]];
    const nextNumeral = romanNumerals[romanNumeral[i + 1]] || 0;

    if (currentNumeral < nextNumeral) {
      result -= currentNumeral;
    } else {
      result += currentNumeral;
    }
  }

  return result;
}

// Example usage
const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";

// Converting Roman numerals to integers
const integer1 = romanToInteger(romanNumeral1);
const integer2 = romanToInteger(romanNumeral2);

// Example Output
console.log(integer1); // Output: 9
console.log(integer2); // Output: 21


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error('The array should contain at least two elements.');
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error('There is no second smallest element in the array.');
  }

  return secondSmallest;
}

// Example usage
const numbers = [5, 2, 9, 1, 5, 6];

// Finding the second smallest number
const secondSmallestNumber = findSecondSmallest(numbers);

// Example Output
console.log(secondSmallestNumber); // Output: 2
