//ЗАДАНИЕ  1
console.log("Привет Мир!".toUpperCase());

console.log("Привет Мир!".charAt());

console.log("Привет Мир!".substring(0,5));

 console.log("Привет Мир!".includes("!"));

 console.log("Привет Мир!".split());

//ЗАДАНИЕ 2
let string = "Привет мир";
let count = 0 
for (let i = 0; i < string.length; i++) {
    if (string[i] === "т") { 
        count++
    }
console.log(count);
}

//ЗАДАНИЕ 3
let sum = "Это простое предложение";
let sams = sum.split(" ");
let sam = sams.length
console.log(sams);  

//ЗАДАНИЕ 4
 let fullName = "Иванов Иван Иванович";
 let ror = fullName.split(" ");
 let surname = ror[0];
let name  = ror[1].charAt(0);
let patronymic = ror[2].charAt(0);
 let shortForm =`${surname} .${name}. ${patronymic}`
console.log(shortForm); 
