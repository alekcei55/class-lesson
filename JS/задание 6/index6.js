const treasureChests = [
  [10, 20, 15],
  [5, 8, 12],
  [25, 30, 10]
];

let totalGold=0
for (let i=0; i<treasureChests.length; i++)  {
const row = treasureChests[i];
for (let j = 0; j < row.length; j++) {
totalGold += row[j];
 }
}

console.log(totalGold);

  const crystalsMap = [
  ["1", "0", "1"],
  ["0", "1", "0"],
  ["1", "0", "1"]
];//1-кристалл;0-пусто//

let crystalCount=0;
for (let i=0; i<crystalsMap.length; i++)  {
  const row =crystalsMapS=[i]  ;
for (let j = 0; j < row.length; j++) {
    if (row[j] === "кристалл") { 
crystalCount++;
}
}
}
console.log(crystalCount);

const cityTemperatures = [
  [15, 18, 20],
  [22, 25, 19],
  [10, 12, 14]
];

function averageTemperature(cityData) {
  let sum = 0;
  for (let temp of cityData) {
sum=+ temp
  }
return Math.round(sum/cityData.length*10) / 10; 
}

const citiesAverages = [
 [15,18,20],
 [22,25,19],
 [10,12,14]
];

for (let i = 0; i < cityTemperatures.length; i++) {
  const avgTemp = averageTemperature(cityTemperatures[i]);
  citiesAverages.push(`Город ${i + 1}: ${avgTemp}°`);
}

console.log(citiesAverages.join(", "));




