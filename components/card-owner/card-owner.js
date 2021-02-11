class CardOwner extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#card-owner", this);
        
    }
    connectedCallback(){
    const elementoInput = this.shadowRoot.querySelector("input");
     elementoInput.addEventListener("keyup", (event) =>{
       const cardOwnerChanged = new CustomEvent("cardOwnerChanged", { 
         detail: {
           cardOwner: elementoInput.value,
         }
       });
       this.dispatchEvent(cardOwnerChanged);
     });
    }
    getValue(){
       const elementoInput = this.shadowRoot.querySelector("input");
       return elementoInput.value;
    }
  }
  
  customElements.define ("card-owner", CardOwner);