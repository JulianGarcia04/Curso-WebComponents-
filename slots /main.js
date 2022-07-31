import './my-element.js';
import './nav-bar.js';

const app = document.querySelector('#app');
let container = document.createElement('div');
container.classList.add('appContainer');
let fragment = document.createDocumentFragment();
let templateFragment = document.createElement('template');
for (let i = 0; i < 20; i++) {
    templateFragment.innerHTML += /*html*/ `
        <my-element>
            <span slot="title">My Card Product</span>
            <span slot="description" class="description">Yo no se que colocar aca</span>
            <span slot="btn-green" class="btn-confirm">Done</span>
            <span slot="btn-red" class="btn-confirm">Cerrar</span>
        </my-element>
    `
}
fragment.appendChild(templateFragment.content);
container.appendChild(fragment);
let template = `<nav-bar></nav-bar>`;
app.innerHTML = template;
app.appendChild(container)
