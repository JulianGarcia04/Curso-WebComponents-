class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    };
    static get observedAttributes(){
        return ['title', 'btn_green', 'btn_red', 'img'];
    }

    attributeChangedCallback(value, oldValue, newValue){
        if (oldValue !== newValue) {
            this[value] = newValue
        }
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/`
            <div class="myCard">
                <p>${this.title}</p>
                <img src=${this.img} alt="imgComponent"/>
                <div>
                    <button>${this.btn_green}</button>
                    <button>${this.btn_red}</button>
                </div>
            </div>
            ${this.getStyles()}
        `
        return template;
    };
    getStyles(){
        return /*html*/`
        <style>
            :host-context(.card){
                border: 1px solid #000;
                border-radius: 10px;
                margin: 15px 10px;
            }

            :host([blue]){
                background-color: #00154F;
                color: #F6AD1B;
            }
            .myCard {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 150px;
                height: 180px;
            }

            .myCard > img {
                width: 80%;
                object-fit: cover:
            }
            
            .myCard > div {
                display: flex;
                justify-content: space-around;
                width: 100%
            }

            .myCard > div > button{
                width: 40%;
                border: none;
                border-radius: 5px;
                color: #F6AD1B;
            }

            .myCard > div > button:nth-child(1){
                background-color: red;
            }

            .myCard > div > button:nth-child(2){
                background-color: green;
            }

        </style>
        `
    }
    render(){
        // const fragment = document.createDocumentFragment();
        this.shadowRoot.appendChild(this.getTemplate().content);
        // this.appendChild(fragment);
    }
    connectedCallback(){

        this.render();

        this.shadowRoot.querySelectorAll('.myCard').forEach(e=>{
            e.addEventListener('click', ()=>{
                window.location = './pag.html';
            })
        })
    }
    disconnectedCallback(){
        console.log('ya me voy!!!');
    }
    
}

customElements.define('my-element', myElement);