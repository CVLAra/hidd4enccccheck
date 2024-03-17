/**
 * Given a array of numbers representing a credit card number calculates luhns sum
 * @param {Array<Number>} numbers - array of numbers representing a credit card number
 */
function luhnSum(numbers) {
  let sum = 0;
  let doubleNextDigit = false;

  for (let i = numbers.length - 1; i >= 0; i--) {
    let digit = numbers[i];

    if (doubleNextDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleNextDigit = !doubleNextDigit;
  }

  return sum;
}

/**
 * Validates a credit card number using luhns algorithm
 * @param {Array<Number>} numbers - array of numbers representing a credit card number
 * @returns {Boolean} returns true if number is valid according to luhns algorithm
 */
function validCreditCard(numbers) {
  return luhnSum(numbers) % 10 === 0;
}

// Check for Visa card numbers
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= 9; k++) {
      const numbers = [4, 5, 4, 6, 0, 5, 0, i, j, k, 0, 2, 7, 5, 2, 7];
      if (validCreditCard(numbers) && numbers.length === 16 && numbers[0] === 4) {
        console.log(`Valid Visa credit card found: ${numbers.join("")}`);
        return;
      }
    }
  }
}

console.log("No valid Visa credit card found.");
