//define a variable to have the variable of "the primary key for each
//piece of pottery"??? 

let primaryKey = 0;

//define and export a fn "makePottery"
//fn must return an object w/ shape, weight, height, id properties
 export const makePottery = (shape, weight, height) => {
 const pieceOfPottery = { 
    pieceShape : shape,
    pieceWeight : weight,
    pieceHeight : height,
 }
 primaryKey++; 
 pieceOfPottery.id = primaryKey;
 return pieceOfPottery;

 
}

// potteryMade =[]
// potteryMade.push(makePottery("mug", 5, 3))
// console.log(potteryMade)
// potteryMade.push(makePottery("bowl", 4, 5))
// console.log(potteryMade)

