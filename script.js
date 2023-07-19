"use strict";
//Const to find the prime numberbers

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

//Function to find the Prime Number

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

let findBirthdayPrime = Object.keys(people).filter((name) =>
  isPrime(people[name])
);

alert("People with age as prime number:");
alert(findBirthdayPrime); // Output: ["Ana", "Irene"]

// const to find prime number between - - 100

function thePrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function findPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (thePrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

const startRange = 0;
const endRange = 100;
const primeNumbnumberbers = findPrimesInRange(startRange, endRange);
console.log(primeNumbnumberbers);
