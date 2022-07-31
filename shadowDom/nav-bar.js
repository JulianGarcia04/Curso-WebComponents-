class navBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"});
    }

    getTemplate(){
        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /*html*/ `
            <nav>
                <img src="./img/stack-overflow-brands.svg"/>
                <ul>
                    <li>Home</li>
                    <li>Compras</li>
                    <li>Ventas</li>
                    <li>Acerca de</li>
                </ul>
                <div>
                    <img src='./img/user .jpeg' alt="user"/>
                    <p>Iniciar Sesión</p>
                </div>
            </nav>
            ${this.getStyles()}
        `
        return TEMPLATE;
    }

    getStyles(){
        return /*html*/ `
            <style>
                nav {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    height: 70px;
                    background-color: #00154F;
                    color: #F6AD1B;
                }
                
                nav> img{
                    width: 50px;
                    height: 70%;
                    object-fit: cover;
                    border-radius: 50%;
                    background-color: white;
                }
                nav ul {
                    display:flex;
                    justify-content: space-around;
                    align-items: center;
                    list-style: none;
                    width: 50%;
                    height: 100%;
                }
                nav > div {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 15%;
                }

                nav > div > img{
                    width: 50px;
                    height: 70%;
                    object-fit: cover;
                    border-radius: 50%;
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

customElements.define('nav-bar', navBar);