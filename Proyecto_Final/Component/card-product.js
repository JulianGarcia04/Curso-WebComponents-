class cardProduct extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        return ['img', 'title', 'sub', 'description', 'price'];
    }

    attributeChangedCallback(attr, oldValue, newValue){
        if(oldValue !== newValue){
            this[attr] = newValue;
        }
    }

    getTemplate(){
        let template = document.createElement('template');
        template.innerHTML = /*html*/ `
            ${this.getStyles()}
            <article class="p-container">
                <section class="p-image">
                    <img src="${this.img}" alt='Nike Zoom 2020'/>
                </section>
                <section class="p-description">
                    <h1>${this.title}</h1>
                    <h2>${this.sub}</h2>
                    <p>${this.description}</p>

                    <div>
                        <h1>${this.price} USD</h1>
                        <button>Comprar</button>
                    </div>
                </section>
            </article>

        `
        return template;
    }
    getStyles(){
        return /*html*/ `
            <style>
                .p-container {
                    display: flex;
                    width: 56.25em;
                    height: 600px;
                    margin: 20px 0px;

                }

                .p-image {
                    position: relative;
                    width: 50%;
                    height:100%;
                    background-color: rgb(206, 206, 206);
                }

                .p-image::before{
                    position: absolute;
                    top:20px;
                    left:20px;
                    font-size: 8em;
                    font-weight: 800;
                    content: 'Nike';
                    color: white;
                    opacity: 0.5;
                }

                .p-image img {
                    position: absolute;
                    top: 25%;
                    right: -290px;
                    width: 70em;
                    height: 30em;
                    object-fit: contain;
                    rotate: -30deg;
                    filter: brightness(1.1);
                    mix-blend-mode: multiply;
                }

                .p-description {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 50%;
                    height: 100%;
                    background-color: white;
                }

                .p-description > * {
                    margin: 20px 30px;
                }

                .p-description > h1 {
                    font-size: 35px;
                }

                .p-description > h2 {
                    color: black;
                    opacity: 0.5;
                }

                .p-description > p {
                    height:300px;
                    text-align: justify;
                }

                .p-description > div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .p-description > div > h1 {
                    font-size: 40px;
                    color: #A2A2A2;
                }

                .p-description > div > button {
                    width: 130px;
                    height: 50px;
                    border: none;
                    border-radius: 20px;
                    font-size: 20px;
                    font-weight: 800;
                    background-color: #5A6CB2;
                    color: white;
                }

                @media (max-width: 425px){
                    .p-container {
                        flex-direction: column;
                        width: 100vw;
                        height: 100vh;
                    }

                    .p-image{
                        width: 100%;
                        height:50%;
                    }

                    .p-image img {
                        top: 5%;
                    }

                    .p-description{
                        justify-content: space-between;
                        width: 100%;
                        height:50%;
                        overflow: scroll;
                    }
                }

            </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('card-product', cardProduct);