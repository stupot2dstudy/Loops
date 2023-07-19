"use strict";
//Const to find the prime numbers

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
