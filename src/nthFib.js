/*
Find the nth Fibinacci number starting from 0.
0, 1, 1, 2, 3, 5, 8, 13...
Do this both non recursive and recursive
*/

export function nthFib(n) {
  let num1 = 0;
  let num2 = 1;
  let temp = 0;
  for (let i = 0; i < n; i++ ) {
    temp = num1;
    num1 = num2;
    num2 = temp + num1;
  }
  return temp;
};

export function nthFibRecursion(n) {
  if (n < 2) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }
  return nthFibRecursion(n - 1) + nthFibRecursion(n - 2);
}
