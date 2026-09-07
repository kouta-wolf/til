"use strict";

// console.log("Hello,world")
// --- 1つめ --- 
const sum = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
};

console.log(sum([1, 2, 3, 4, 5]));  // → 15
console.log(sum([10]));             // → 10
console.log(sum([]));               // → 0

// for (const...)がダメな理由はconstは再代入がletと違ってできないため
// i++ はi = i + 1という挙動のためこの時点でエラーとなる

const max = (nums) => {
  if (nums.length === 0) throw new Error("空の配列には最大値がありません");
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
    } 
  }
  return largest;
};

console.log(max([3, 5, 4, 2, 6]));
console.log(max([-3, -6]));
// console.log(max([]));

// --- 2つめ ---
const filterEven = (nums) => {
  const evenResult = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenResult.push(nums[i]);
    }
  }
  return evenResult;
};

console.log(filterEven([1, 2, 3, 4, 5, 6]));
console.log(filterEven([1, 3, 5]));
console.log(filterEven([]));


console.log("--- 3つめ ---");

const doubleAll = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * 2);
  }
  return result;
};

console.log(doubleAll([1, 2, 3]));    // → [2, 4, 6]
console.log(doubleAll([-1, 0, 5]));   // → [-2, 0, 10]
console.log(doubleAll([]));           // → []

const original = [1, 2, 3];
doubleAll(original);
console.log(`1,2,3ならよい:${original}`)


console.log("--- 4つめ ---");

const includes = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
  }
  return false;
};
console.log(includes([1, 2, 3], 2));   // → true
console.log(includes([1, 2, 3], 9));   // → false
console.log(includes([], 1));          // → false

const indexOf = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(indexOf([10, 20, 30], 20)); // -> 1
console.log(indexOf([10, 20, 30], 99)); // -> -1


console.log("--- 5つめ ---");

const sum2 = (nums) => {
  return nums.reduce((acc, val) => acc + val, 0);
};

console.log(sum2([1, 2, 3, 4, 5]));       // → 15
console.log(sum2([]));                     // → 0

const filterEven2 = (nums) => {
  return nums.filter((n) => n % 2 === 0);
};
console.log(filterEven2([1, 2, 3, 4]));   // → [2, 4]

const doubleAll2 = (nums) => {
  return nums.map((n) => n * 2);
};
console.log(doubleAll2([1, 2, 3]));       // → [2, 4, 6]

const includes2 = (nums, target) => {
  return nums.some((n) => n === target)
};
console.log(includes2([1, 2, 3], 2));     // → true
console.log(includes2([], 1));            // → false

console.log("--- 6つめ ---")

const applyToEach = (nums, fn) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(fn(nums[i]));
  }
  return result;
};
console.log(applyToEach([1, 2, 3], (n) => n * 2));      // → [2, 4, 6]
console.log(applyToEach([1, 2, 3], (n) => n + 100));    // → [101, 102, 103]
console.log(applyToEach(["a", "b"], (s) => s + "!"));   // → ["a!", "b!"]
console.log(applyToEach([], (n) => n * 2));             // → []
