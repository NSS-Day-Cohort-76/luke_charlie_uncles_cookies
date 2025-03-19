import { createIceCream } from "./iceCream.js";
import { createCookies } from "./cookies.js";
import { database } from "./database.js"

const cart = []

const cookieHTML = createCookies(database)
const cookieContainer = document.querySelector('#container__cookies')
cookieContainer.innerHTML = cookieHTML;


const iceCreamHTML = createIceCream(database)
const iceCreamContainer = document.querySelector('#container__icecream')
iceCreamContainer.innerHTML = iceCreamHTML;

const button = document.querySelector("btn")
button.addEventListener()