let chests = [12, 5, 8, 15, 3, 10];
let totalCoins = 0;
for(let i = 0; i < chests.length; i++) {
    totalCoins += chests[i];
}
console.log("Общее количество монет:", totalCoins);

let traps = [0, 0, 0, 0, 0, 0];
for(let j = 1; j < traps.length; j+=2) {
    traps[j] = "ловушка"; 
}
console.log("Позиции ловушек:", traps);