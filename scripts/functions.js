import { database } from "./database.js";



//handle button click
export function salesOnClick() {

    const randomIceCream = database.iceCream[
        Math.floor(Math.random() * database.iceCream.length)
    ]
    const randomCookie = database.cookies[
        Math.floor(Math.random() * database.cookies.length)
    ]
    

    const randomSaleHTML = `
        <div class="random-sale">
            <h3>Today's Special Combo</h3>
        <div class="ice-cream-card">
            <img src="${randomIceCream.img}" alt="${randomIceCream.name}">
            <div class="ice-cream-name">
                ${randomIceCream.name}<br>
                ${randomIceCream.description}
                </div>          
            </div> 
        <div class="cookie-card">
            <img src="${randomCookie.img}" alt="${randomCookie.name}">
             <div class="cookie-name">
                 ${randomCookie.name}<br>
                 ${randomCookie.description}
                 </div>          
            </div> 
            <p class = "random-price">Today's Special ONLY $9.99</p>
            </div>

`;
return randomSaleHTML
}