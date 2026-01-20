//ЗАДАЧА 1
function getDayName(date) {
const days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
let numDay =date.getDay()     
    return days[numDay]
}


//ЗАДАЧА 2
console.log(getDayName(new Date(2024, 0, 15))); // "понедельник"
console.log(getDayName(new Date(2024, 0, 20))); // "суббота"
function daysDifference(dood1, dood2) {
const startDate = new Date(dood1);
 const endDate = new Date(dood2);
 console.log(startDate)
const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

const diffDays = timeDiff / (1000 * 60 * 60 * 24);
    
    return diffDays;
}
console.log(daysDifference('2022.02.05', "2022.02.01"));


//ЗАДАЧА 3 

function daysUntilBirthday (sool1){
    const today = new Date();
        const currentYearBirthday = new Date(sool1);
        console.log(currentYearBirthday)
    const nextBirthday = new Date((today.getFullYear()+1), currentYearBirthday.getMonth(),currentYearBirthday.getDate()) 
    console.log(nextBirthday)
    const timeDiff = nextBirthday.getTime() - today.getTime();
    console.log(timeDiff)
    const diffDays =timeDiff / (1000 * 60 * 60 * 24);
    
    return diffDays;
}





const sool1 = new Date(2012, 8, 29);
console.log(daysUntilBirthday ("2012-08-29"))

