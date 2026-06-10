// Question #3
let userPassword = "wcewe";
// เริ่มเขียนโค้ดตรงนี้
let checkPasswordStrength = (userPassword) => {
  if (userPassword.length > 10) {
    return "Strong";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else if (userPassword.length !== 0) {
    return "Weak";
  }
};

console.log(checkPasswordStrength(userPassword));
