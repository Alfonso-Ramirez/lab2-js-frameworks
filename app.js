// app.js (Main Entry File)

import {
  welcomeMessage,
  convertTemperature,
  factorial,
  randomNumber,
} from './utils.js';

// Calling the functions
welcomeMessage('Joaquin', 'Ramirez');
console.log(`25°C in Fahrenheit: ${convertTemperature(25)}`);
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Random number between 1 and 100: ${randomNumber(1, 100)}`);
