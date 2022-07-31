

    

class myElement extends HTMLElement {
    constructor() {
        super();
    };
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="myCard">
                <p>CardTemplate</p>
                <div>
                    <button>Close</button>
                    <button>Check</button>
                </div>
            </div>
            ${this.getStyles()}
        `
        return template;
    };
    getStyles(){
        return `
        <style>
            .myCard {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 150px;
                height: 100px;
                border: 1px solid #000;
                border-radius: 10px;
                margin: 15px 10px;
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
        this.appendChild(this.getTemplate().content);
        // this.appendChild(fragment);
    }
    connectedCallback(){

        this.render();
    }
    
}

customElements.define('my-element', myElement);