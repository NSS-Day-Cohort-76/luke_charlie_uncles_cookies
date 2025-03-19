import { createIceCream } from "./iceCream.js";
import { createCookies } from "./cookies.js";
import { database } from "./database.js"
import { salesOnClick } from "./functions.js";

document.getElementById('comboButton').addEventListener('click', salesOnClick);



const cart = []

const cookieHTML = createCookies(database)
const cookieContainer = document.querySelector('#container__cookies')
cookieContainer.innerHTML = cookieHTML;


const iceCreamHTML = createIceCream(database)
const iceCreamContainer = document.querySelector('#container__icecream')
iceCreamContainer.innerHTML = iceCreamHTML;

const button = document.querySelector("btn")
button.addEventListener()
document.getElementById('comboButton').addEventListener('click', () => {
    const randomSaleHTML = salesOnClick();
    document.getElementById('random-sale-container').innerHTML = randomSaleHTML;
})



