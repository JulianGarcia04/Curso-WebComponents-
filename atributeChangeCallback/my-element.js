class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    };
    static get observedAttributes(){
        return ['title', 'btn_green', 'btn_red', 'img'];
    }

    attributeChangedCallback(value, oldValue, newValue){
        if(value === 'title'){
            this.title = newValue;
        }
        if(value === 'btn_green'){
            this.btn_green = newValue;
        }
        if(value === 'btn_red'){
            this.btn_red = newValue;
        }
        if(value === 'img'){
            this.img = newValue;
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
            .myCard {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 150px;
                height: 180px;
                border: 1px solid #000;
                border-radius: 10px;
                margin: 15px 10px;
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
    }
    
}

customElements.define('my-element', myElement);