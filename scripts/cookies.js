import { database } from "./database.js";

export const createCookies = (database) => {

    const sortedCookies = [...database.cookies].sort((a, b) =>
        a.name.localeCompare(b.name)
);
    let cookieHTML = '<h2 id="title__cookies">Cookies</h2>';
    for (let i = 0; i < sortedCookies.length; i++) {
        cookieHTML += `
            <div class= "cookie-card">
                <img class="img__cookie" src="${sortedCookies[i].img}" alt="${sortedCookies[i].name}">
             <div class="cookie-info">
             <span class="cookie__title">${sortedCookies[i].name}</span><br>
             <span class="cookie__descr">${sortedCookies[i].description}</span>
             </div>
             </div>
             
        
        `;
    }

     return cookieHTML;   
    }


// <div class ="cookie-description">${database.cookies[i].description}</div>
