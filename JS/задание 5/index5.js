let squad1 = ["воин", "маг"];
let squad2 = ["лучник", "лекарь"];

let unitedSquad = squad1.concat(squad2);

console.log(unitedSquad); 

let heroes = ["воин", "маг", "лучник", "лекарь", "вор"];

let questGroup = heroes.slice(0, 3);

console.log(questGroup);

let items = ["меч", "карта", "факел", "ключ"];

let hasKey = items.includes("ключ");

console.log(hasKey);

let attackOrder = ["воины", "лучники", "маги"];

attackOrder.reverse();

console.log(attackOrder);

let passwordParts = ["огненный", "дракон", "горы"];

let magicPassword = passwordParts.join("-");

console.log(magicPassword);

let potions = ["зелье здоровья", "зелье маны"];

potions.push("зелье невидимости");

console.log(potions);

let potionsInventory = ["зелье силы", "зелье скорости", "зелье здоровья"];

potionsInventory.pop();

console.log(potionsInventory);

let warriors = ["воин", "маг", "лучник"];

warriors.shift();

console.log(warriors);

let tasks = ["найти артефакт", "победить дракона"];

tasks.unshift("спасти деревню");

console.log(tasks);

