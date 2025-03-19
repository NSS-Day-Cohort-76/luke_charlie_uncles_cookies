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
        <div><h3 class="title__sub">Today's Feature Combo:  ONLY $9.99!</h3></div>
        <div class="random-sale">
            <div class="ice-cream-card">
                <img src="${randomIceCream.img}" alt="${randomIceCream.name}">
                <div class="ice-cream-name">
                    <span class="icecream__title">${randomIceCream.name}</span><br>
                    <span class="icecream__descr">${randomIceCream.description}</span>
                    </div>          
                </div>
            <div class="cookie-card">
                <img src="${randomCookie.img}" alt="${randomCookie.name}">
                <div class="cookie-name">
                    <span class="cookie__title">${randomCookie.name}</span><br>
                    <span class="cookie__descr">${randomCookie.description}</span>
                    </div>          
                </div> 
                
        </div>

`;
return randomSaleHTML
}