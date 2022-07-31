import './Component/card-product.js';
import data from './services/api-services.js';

const app = document.querySelector('#app');
const fragement = document.createDocumentFragment();
const template = document.createElement('template');

for (let i = 0; i < data.length; i++) {
    
    template.innerHTML = /*html*/`<card-product
                        img="${data[i].img}"
                        title="${data[i].name}"
                        sub="${data[i].category}"
                        description="${data[i].description}"
                        price="${data[i].price}"
                    >
                    </card-product>`;
    fragement.appendChild(template.content);
    
}

app.appendChild(fragement);
