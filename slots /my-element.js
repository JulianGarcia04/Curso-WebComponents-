class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
    };
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/`
            <div class="myCard">
                <p><slot name="title"></slot></p>
                <p><slot name="description"></slot></p>
                <div>
                    <button><slot name="btn-red"></slot></button>
                    <button><slot name="btn-green"></slot></button>
                </div>
            </div>
            ${this.getStyles()}
        `
        return template;
    };
    getStyles(){
        return /*html*/`
        <style>
            :host{
                border: 1px solid #000;
                border-radius: 10px;
                margin: 15px 10px;
                background-color: #00154F;
            }
            ::slotted(span){
                font-family: 'Akshar', sans-serif;
                font-family: 'BhuTuka Expanded One', cursive;
                font-family: 'Karla', sans-serif;
                color: #F6AD1B;
            }
            ::slotted(.description){
                font-size: 12px;
            }
            ::slotted(.btn-confirm){
                color: black;
                font-weight: bold;
            }
            .myCard {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 150px;
                height: 150px;
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