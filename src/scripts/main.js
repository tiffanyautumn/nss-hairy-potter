// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./kiln.js";
console.log("hello")
// Make 5 pieces of pottery at the wheel
//let mug = makePottery()

const piece1 = makePottery("vase", 6, 4)
const piece2 = makePottery("vase", 5, 7)
const piece3 = makePottery("mug", 2 , 3)
const piece4 = makePottery("bowl", 4, 4)
const piece5 = makePottery("mug", 1, 3)



// Fire each piece of pottery in the kiln

firePottery(piece1, 2200)
firePottery(piece2, 2210)
firePottery(piece3, 1999)
firePottery(piece4, 2200)
firePottery(piece5, 1999)
console.log(piece1)
console.log(piece2)
console.log(piece3)
console.log(piece4)
console.log(piece5)
// const pieces = mug
// const pieceind = {}
// for (const piece of pieces) {

// }
// console.log(pieces)
// const piecesToFire = (temperature) => {
//     for (const piece of pieces) {
//         firePottery(piece,temperature)
//     } return pieces
// }


// const firePottery = (mugarray) => {
//     for (const piece of mug ) {
//         piece.isfired = true
//     } return mug
// }
// let firedPottery = firePottery(mug)
// console.log(firedPottery)
// // Determine which ones should be sold, and their price
// const sellingPottery = (mugArray) => {
//     for (const piece of mug) {
//         if (piece.pieceShape === "mug" || piece.pieceShape === "vase") {
//             piece.sellable = true;
//             if (piece.pieceShape === "mug") {
//                 piece.price = 15
//             } else {
//                 piece.price = 40
//             }
//         } else {
//             piece.sellable = false
//             piece.price = "not for sale"
//         }
//     }return mug
   
// }

// // Invoke the component function that renders the HTML list
// const potteryForSale = (sellingPottery(mug))
// export const potteryWares = () => {
//       //build the string with html
//     let htmlString = `<article class ="potterypieces">`
//     for (const piece of potteryForSale) {
//         htmlString += `<section`
//     }
// }


