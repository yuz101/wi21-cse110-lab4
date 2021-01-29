// let statistics = {
//     redCars: 21,
//     blueCars: 45,
//     greenCars: 12,
//     raceCars: 5,
//     blackCars: 40,
//     rareCars: 2
// };
for (const each in statistics) {
    if(each[0] == 'r'){
        console.log(statistics[each]);
    }else if(statistics[each] % 2 == 1){
        console.log(statistics[each]);
    }
}