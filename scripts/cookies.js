import { database } from "./database.js";

export const createCookies = (database) => {
    let cookieHTML = '';
    for (let i = 0; i < database.cookies.length; i++) {
        cookieHTML += `
            <div class= "cookie-card">
                <img src=${database.cookies[i].img} alt=${database.cookies[i].name}}
             <div class="cookie-name">
             ${database.cookies[i].name}<br>
             ${database.cookies[i].description}
             </div>
             </div>
             
        
        `;
    }

     return cookieHTML;   
    }


// <div class ="cookie-description">${database.cookies[i].description}</div>
