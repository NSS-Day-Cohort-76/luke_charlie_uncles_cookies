import { createIceCream } from "./iceCream.js";
import { createCookies } from "./cookies.js";
import { database } from "./database.js"
import { salesOnClick } from "./functions.js";

document.getElementById('comboButton').addEventListener('click', salesOnClick);




const cookieHTML = createCookies(database)
const cookieContainer = document.querySelector('#cookie-card')
cookieContainer.innerHTML = cookieHTML;


const iceCreamHTML = createIceCream(database)
const iceCreamContainer = document.querySelector('#ice-cream-card')
iceCreamContainer.innerHTML = iceCreamHTML;

document.getElementById('comboButton').addEventListener('click', () => {
    const randomSaleHTML = salesOnClick();
    document.getElementById('random-sale-container').innerHTML = randomSaleHTML;
})



