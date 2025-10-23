let currentHealth = 15;
let maxHealth = 100;

while (currentHealth < maxHealth) {

    currentHealth += 10;
    console.log(`Текущее здоровье: ${currentHealth}`);
}

console.log('Лечение завершено! 💚');

let fireballPower = 150;

while (fireballPower > 100) {
    fireballPower *= 0.8;
    console.log(`Применение заклинания... Текущая сила: ${Math.round(fireballPower)}`);
}

console.log('Заклинание сбалансировано! 🔥');

let strength = 10; 
const maxStrength = 25; 

while (strength < maxStrength) {
    let improvement = Math.floor(Math.random() * 5) + 1; 
    
    if ((strength + improvement) > maxStrength) {
        strength = maxStrength;
    } else {
        strength += improvement; 
    }
    
    console.log(`Текущая сила: ${strength}`); 
}