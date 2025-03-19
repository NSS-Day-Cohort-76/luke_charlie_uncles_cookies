import { createIceCream } from "./iceCream.js";
import { createCookies } from "./cookies.js";
import { database } from "./database.js"

const cookieHTML = createCookies(database)
const cookieContainer = document.querySelector('#cookie-card')
cookieContainer.innerHTML = cookieHTML;


const iceCreamHTML = createIceCream(database)
const iceCreamContainer = document.querySelector('#ice-cream-card')
iceCreamContainer.innerHTML = iceCreamHTML;

