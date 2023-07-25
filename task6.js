let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}|;:,.?";

function generatePassword(length) {
let password = "";
for (let i = 0; i < length; i++) {
    
password += characters[Math.floor(Math.random() * characters.length)];
}

return password;
}

console.log(generatePassword(6))