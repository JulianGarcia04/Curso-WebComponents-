import './my-element.js';
import './nav-bar.js';

const app = document.querySelector('#app');
let container = document.createElement('div');
container.classList.add('appContainer');
let fragment = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
    const my_element = document.createElement('my-element');
    fragment.appendChild(my_element);
}
container.appendChild(fragment);
let template = `<nav-bar></nav-bar>`;
app.innerHTML = template;
app.appendChild(container)
