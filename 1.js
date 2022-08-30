/*
Write a function that takes in a non-empty array of integers 
that are sorted in ascending order and returns a new 
array of the same length with the squares of the original 
integers also sorted in ascending order.
*/

const asc = [1, 2, 3, 34, 6, 8, 9];

const toPower = (asc) => {
  const withPow = asc.map((num) => {
    return Math.pow(num, 2);
  });
  withPow.sort((a, b) => {
    return a - b;
  });
  console.log(withPow);
};

toPower(asc);
