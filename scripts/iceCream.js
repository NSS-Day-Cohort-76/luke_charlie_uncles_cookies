import { database } from "./database.js";

export const createIceCream = (database) => {
    const sortedIceCream = [...database.iceCream].sort((a, b) =>
        a.name.localeCompare(b.name)
);

    let iceCreamHTML = `<h2 id="title__cookies">Ice Cream</h2>`
    for (let i = 0; i < sortedIceCream.length; i++) {
        iceCreamHTML += `
            <div class= "ice-cream-card">
                <img class="img__icecream" src="${sortedIceCream[i].img}" alt="${sortedIceCream[i].name}">
             <div class="ice-cream-info">
             <span class="icecream__title">${sortedIceCream[i].name}</span><br>
             <span class="icecream__descr">${sortedIceCream[i].description}</span><br>
             <button class="btn">Add To Cart</button>
             </div>
            </div>`
    }

    return iceCreamHTML;   
}



