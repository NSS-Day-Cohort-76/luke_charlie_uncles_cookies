import { database } from "./database.js";

export const createCookies = (database) => {

    const sortedCookies = [...database.cookies].sort((a, b) =>
        a.name.localeCompare(b.name)
);
    let cookieHTML = '';
    for (let i = 0; i < sortedCookies.length; i++) {
        cookieHTML += `
            <div class= "cookie-card">
                <img src="${sortedCookies[i].img}" alt="${sortedCookies[i].name}"
             <div class="cookie-name">
             ${sortedCookies[i].name}<br>
             ${sortedCookies[i].description}
             </div>
             </div>
             
        
        `;
    }

     return cookieHTML;   
    }


// <div class ="cookie-description">${database.cookies[i].description}</div>
