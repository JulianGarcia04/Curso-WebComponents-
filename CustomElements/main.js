import './my-element.js';

const app = document.querySelector('#app');
let template = ``;
for (let i = 0; i < 5; i++) {
    template += `
        <my-element></my-element>
    `
}

app.innerHTML = template;
