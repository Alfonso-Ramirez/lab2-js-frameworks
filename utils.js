// utils.js (Utility Module)

// Function 1: Prints a welcome message
export function welcomeMessage(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
}

// Function 2: Converts Celsius to Fahrenheit
export function convertTemperature(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function 3: Computes the factorial of a number
export function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Function 4: Generates a random number within a given range
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
