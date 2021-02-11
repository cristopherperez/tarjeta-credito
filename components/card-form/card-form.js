class CardForm extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#card-form", this);    
    }
    
    connectedCallback(){
      const cardNumber = this.shadowRoot.querySelector("card-number");
      const cardFront = this.shadowRoot.querySelector("card-front");
      const cardOwner = this.shadowRoot.querySelector("card-owner");
      const cardExpiration = this.shadowRoot.querySelector("card-expiration");
      
      cardNumber.addEventListener("cardNumberChanged", (event) => {
        cardFront.setCardNumber(event.detail.cardNumber); 
        cardFront.setCardStyle(event.detail.cardNumber)     
      })
      
      cardOwner.addEventListener("cardOwnerChanged", (event) => {
        cardFront.setCardOwner(event.detail.cardOwner);
      });
      
      cardExpiration.addEventListener("cardExpirationChanged", (event) => {
        cardFront.setCardExpiration(event.detail.cardExpiration);
      });
      const validateButton = this.shadowRoot.querySelector
      ("button");
      validateButton.addEventListener("click", (event) =>{
        const cardNumberValue = cardNumber.getValue();     
        const cardOwnerValue = cardOwner.getValue();
        const cardExpirationValue = cardExpiration.getValue();
        if ( cardNumberValue === ""){
          const errorElement = this.shadowRoot.querySelector (".error")
          errorElement.innerHTML = "Falta número de tarjeta";
        }
      }) 
    }
  }
  customElements.define ("card-form", CardForm);