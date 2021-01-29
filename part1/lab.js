// function discountPrices(prices, discount){
//     const discounted = [];
//     let finalPrice = 0;
//     for(let i = 0; i < prices.length; i++){
//         const discountedPrice = prices[i]*(1-discount);
//         finalPrice = Math.round(discountedPrice * 100) / 100;
//         discounted.push(finalPrice);
//     }
//     // console.log(i);
//     // console.log(discountedPrice);
//     // console.log(finalPrice);

const { func } = require("prop-types");

    
//     return discounted;
// }
// console.log(discountPrices([100,200,300],0.5));

// let student = {
//     name: 'Sarah',
//     major: 'Computer Science',
//     'Grad Year' : '2022',
//     greeting: function(){console.log('Hello!'); },
//     'Favorite Teacher' :{
//         name : "Thomas",
//         course : 'CSE 110'
//     },
//     courseLoad : ['CSE110', 'CSE134', 'VIS 41']
// }
// console.log(student.greeting)

// if(2 == true){
//     console.log('Hello!');
// }else if(2){
//     console.log('How are you?');
// } else{
//     console.log('Goodbye');
// }

// function modifyArray(array, callback) {
//     const newArr = [];
//     for(let i = 0; i < array.length; i++){
//         newArr.push(callback(array[i], function(x) {
//             return x* 2;
//         }));
//     }
//     return newArr;
// }
// function doSomething(num, callback){
//     return callback(num + 2);
// }
// console.log(modifyArray([1,2,3], doSomething))

function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}
printNums();