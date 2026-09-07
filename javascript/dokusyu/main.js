function greet(name) {
  return `こんにちは、${name}さん`;
}

console.log(greet("太郎"));
console.log(greet("花子"));


function greet2(name, situation = "こんにちは") {
  return `${situation}、${name}さん`;
}

console.log(greet2("太郎", "おはよう"));
console.log(greet2("花子", "こんばんは"));
console.log(greet2("ジョン"));

// --- 3つめ ---

const greetExpr = function(name, situation = "こんにちは") {
  return `${situation}、${name}さん`;
};

console.log(greetExpr("太郎", "おはよう"));
console.log(greetExpr("花子", "こんばんは"));
console.log(greetExpr("ジョン"));

// --- 4つめ ---

// const greetArrow = (name, situation = "こんにちは") => {
//  return `${situation}、${name}さん`;
// };
const greetArrow = (name, situation = "こんにちは") => `${situation}、${name}さん`;

console.log(greetArrow("太郎", "おはよう"));
console.log(greetArrow("花子", "こんばんは"));
console.log(greetArrow("ジョン"));


// --- エラーチェック

console.log(greetBefore("太郎", "おはよう"));

function greetBefore(name, situation ="こんにちは"){
  return `${situation}、${name}さん`;
}

//console.log(greetBeforeExpr("花子", "こんばんは"));

//const greetBeforeExpr = function(name, situation = "こんにちは") {
//  return `${situation}、${name}さん`
//};


// --- 6つめ ---
const classifyAge = (age) => {
  if (age < 0) return "不正な年齢";
  if (age < 13) return "子ども";
  if (age < 20) return "学生";
  return "大人";
};

console.log(classifyAge(5));    // → 子ども
console.log(classifyAge(15));   // → 学生
console.log(classifyAge(30));   // → 大人
console.log(classifyAge(-1));   // → 不正な年齢

// --- 7つめ ---
const introduce = (name, age) => {
  if(age < 0) return `年齢が不正です（年齢: ${age}）。0歳以上に直してください。`;

  return `${greet(name)}。あなたは${classifyAge(age)}です。`;
};

console.log(introduce("太郎", 30));  // → こんにちは、太郎さん。あなたは大人です。
console.log(introduce("次郎", 15));  // → こんにちは、次郎さん。あなたは学生です。
console.log(introduce("三郎", -1));  // → 年齢が不正です（年齢: -1）。0歳以上に直してください。
