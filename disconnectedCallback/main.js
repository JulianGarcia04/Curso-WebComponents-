import './my-element.js';
import './nav-bar.js';

const app = document.querySelector('#app');
let container = document.createElement('div');
container.classList.add('appContainer');
let fragment = document.createDocumentFragment();
let templateFragment = document.createElement('template');
for (let i = 0; i < 80; i++) {
    templateFragment.innerHTML += /*html*/ `
        <my-element 
            class="card"
            blue
            title="My Card Component"
            btn_green="Ok" 
            btn_red="Cerrar"
            img="https://www.semana.com/resizer/rH4_rbif0fmvefux9P8yPeuPOhA=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/EMVX56K62JCS7J3BH2M4BA33RU.jpg">
        </my-element>
    `
}
fragment.appendChild(templateFragment.content);
container.appendChild(fragment);
let template = `<nav-bar 
                img="https://avatars3.githubusercontent.com/u/1905708?s=280&v=4/">
                </nav-bar>`;

app.innerHTML = template;
app.appendChild(container)
