function day(sun) {
    const days = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];

    if (sun >= 1 && sun <= 7) {
        return days[sun - 1]; 
    }
}

console.log(day(4));
console.log(day(6)); 


const dayWeek = (soor) => {
    const time = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    if (soor >= 1 && soor <= 7) {
        return time[soor - 1];
    }
};

console.log(dayWeek(1));
console.log(dayWeek(7));




//ЗАДАНИЕ 2

   function number(all) {
    let numbers = [];
    for (let i = 0; i < all.length; i++) {
        if (all[i] > 0 && all[i] < 10) {
            numbers.push(all[i]); 
        }
    }
    return numbers;
}

function doom(xbckf) {
let day = [];
    for (let i = 0; i < xbckf.length; i++) {
        if (xbckf[i] > 0 && xbckf[i] < 10) {
            day.push(xbckf[i]);
        }
    }
    return day;
};

const lool = [57,4,7,6,0,476,98];
console.log(doom(lool));

//ЗАДАНИЕ 3

function getDivisors(dfq) {
    const xnjnj = [];

    for (let i = 1; i <= dfq; i++) {
        if (dfq % i === 0) {   
            xnjnj.push(i);  
        }
    }
    
    return xnjnj;
}

console.log(getDivisors(13)); 











