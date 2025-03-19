import { database } from "./database.js";

export const createIceCream = (database) => {

    const sortedIceCream = [...database.iceCream].sort((a, b) =>
        a.name.localeCompare(b.name)
);

    let iceCreamHTML = '';
    for (let i = 0; i < sortedIceCream.length; i++) {
        iceCreamHTML += `
            <div class= "ice-cream-card">
                <img src=${sortedIceCream[i].img} alt=${sortedIceCream[i].name}}
             <div class="ice-cream-name">
             ${sortedIceCream[i].name}<br>
             ${sortedIceCream[i].description}
             </div>
            </div>
    
        
        `;
    }
    // <div class="ice-cream-description">${database.iceCream[i].description}</div

     return iceCreamHTML;   
    }



