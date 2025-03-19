import { database } from "./database.js";

export const createIceCream = (database) => {
    let iceCreamHTML = '';
    for (let i = 0; i < database.iceCream.length; i++) {
        iceCreamHTML += `
            <div class= "ice-cream-card">
                <img src=${database.iceCream[i].img} alt=${database.iceCream[i].name}}
             <div class="ice-cream-name">
             ${database.iceCream[i].name}<br>
             ${database.iceCream[i].description}
             </div>
            </div>
    
        
        `;
    }
    // <div class="ice-cream-description">${database.iceCream[i].description}</div

     return iceCreamHTML;   
    }



