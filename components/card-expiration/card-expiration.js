class CardExpiration extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#card-expiration", this);
    }
    connectedCallback(){
    const elementoInput = this.shadowRoot.querySelector("input");
     elementoInput.addEventListener("keyup", (event) =>{
       const cardExpirationChanged = new CustomEvent("cardExpirationChanged", { 
         detail: {
          cardExpiration: elementoInput.value,
         }
       });
       this.dispatchEvent(cardExpirationChanged);
     });
    }
    getValue(){
       const elementoInput = this.shadowRoot.querySelector("input");
       return elementoInput.value;
    }
  }
  customElements.define ("card-expiration", CardExpiration);  