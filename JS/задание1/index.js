// 1. Характеристики персонажа RPG
let playerName = "Александр"; // Имя персонажа
let health = 85; // Уровень здоровья (0-100)
let damage = 20; // Сила атаки
let isHero = true; // Является ли персонаж героем

// Вывод карточки персонажа
console.log("[" + playerName + "]");
console.log("Здоровье: ❤️ " + health);
console.log("Урон: ⚔️ " + damage);
console.log("Статус: " + (isHero ? "Герой" : "Злодей"));

// 2. Бросок кубика для Dungeons & Dragons
let diceRoll = Math.floor(Math.random() * 20) + 1; // случайное число от 1 до 20
console.log("Бросок кубика: " + diceRoll);

// 3. Диалог с NPC
let npcName = "Старый Мудрец"; // Имя NPC
let playerNamePrompt = prompt("Как тебя зовут, путник?"); // Запрос имени игрока
let questItem = "древний артефакт"; // Название предмета для квеста

// Диалог NPC
alert("Приветствую, " + playerNamePrompt + ". Я, " + npcName + ", поручаю тебе найти " + questItem + ".");

// 4. Калькулятор магической силы
let basePower = 40; // Базовая сила магии

// Расчёт силы для заклинаний
let fireballPower = basePower * 3; // Огненный шар
let healPower = basePower + 15; // Исцеление
let invisibilityPower = basePower / 2; // Невидимость

// Вывод таблицы заклинаний и их сил
console.log("Заклинание | Сила");
console.log("-----------|-------");
console.log("Огненный шар | " + fireballPower);
console.log("Исцеление  | " + healPower);
console.log("Невидимость | " + invisibilityPower);