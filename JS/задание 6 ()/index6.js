const deer = [
  [10, 20, 15],
  [5, 8, 12],
  [25, 30, 10]
];
 
let totalDeer = 0;

for (let i = 0; i < deer.length; i++) {
  const element = deer[i];
  for (let k = 0; k < element.length; k++) {
    totalDeer += deer[i][k]
  }
}
console.log(totalDeer)



const dood =[ 
  ["кристалл", "пусто", "кристалл"],
  ["пусто", "кристалл", "пусто"],
  ["кристалл", "пусто", "кристалл"]
]
let totalDood = 0;

for (let i = 0; i < dood.length; i++) {
  const element = dood[i];
  for (let l = 0; l < element.length; l++) {
   if (dood[i][l] ==='кристалл'){
    totalDood ++
   }
  }
}
console.log(totalDood)


const lool =[
  [15, 18, 20], // Город 1: температура за 3 дня
  [22, 25, 19], // Город 2: температура за 3 дня
  [10, 12, 14]  // Город 3: температура за 3 дня
]

totalLool=0

const cities=['0','1','2']

for (let i = 0; i < lool.length; i++) {
  const element = lool[i];
  for (let h = 0; h < element.length; h++) {
    totalLool += lool[i][h]
  }
cool=totalLool/lool.length
console.log(cool)
}



















