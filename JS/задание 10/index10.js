const numbers = [1, 2, 3, 4, 5];
const sour = numbers.map(num => num * num);
console.log(sour);


const doob = ["privet", "robot"];
const reverseddoob = doob.map((str) =>str.split('').reverse().join(''))
console.log(reverseddoob);



const nums = [1, 2, 3, 4, 5];
const songNums = nums.map((num, index) => num * index);
console.log(songNums);


let sums = 0;
const array = [1, 2, 3, 4, 5];
array.forEach(num => {
   sums += num ** 2;
});
console.log(sums);



const loinumbers = [-1, 2, -3, 4, -5, 1488,52,42];
const dolNumbers = loinumbers.filter(num => num > 0);
console.log(dolNumbers)


const hah = [1,2,3,4,5,6,7,8,9];
const filteredHahah= hah.filter((num, index) => num * index < 30);
console.log(filteredHahah);





