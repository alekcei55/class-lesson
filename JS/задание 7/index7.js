const soors  = [
{ "name1": "стол",'price': 5000 ,quantity: 5 },
{ "name2": "кресло",'price': 1200 ,quantity: 7 },
{ "name3": "монитор",'price': 7600 ,quantity: 8 },
{ "name4": "клавиатура",'price': 500 ,quantity:  15 },
]; 

const max_price=5400
  let totalCoins = 0;
for ( thing of soors  ){ 
   thing['total'] = thing['price'] * thing['quantity']; 
    if (thing['price'] <= max_price) { //подходящая цена 
    totalCoins += thing['price']; 
    } }
 console.log(totalCoins);
console.log(soors[1]['total'])





















