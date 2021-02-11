class CardFront extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#card-front",this);
    }
  
    formatCardNumber(cardNumberText){
  
      if (cardNumberText ===""){
        return cardNumberText.padEnd(16, "*"); 
      } 
      const cardData = new AnalizadorTarjeta(cardNumberText);
      const numberWithoutSpace = cardData.obtenerNumSinEspacio();
      const cardBrand = cardData.identificarTarjeta();
      if (cardBrand === "Visa"||
          cardBrand === "Mastercard"){
        const paddedNumber = numberWithoutSpace.padEnd(16, "*")

        const substrNumber = paddedNumber.substr(0,4) + " " + paddedNumber.substr(4,4) + " " + paddedNumber.substr(8,4) + " " + paddedNumber.substr(12,4);
  
        return substrNumber; 
      }
      if (cardBrand === "American Express"){
        const paddedNumber = numberWithoutSpace.padEnd(15, "*")
        
        const substrNumber = paddedNumber.substr(0,4) + " " + paddedNumber.substr(4,6) + " " + paddedNumber.substr(10,5);
  
        return substrNumber; 
      }  
    }
    
    setCardStyle(cardNumberText){
      const cardData = new AnalizadorTarjeta(cardNumberText);
      const cardBrand = cardData.identificarTarjeta();
      const cardElement = this.shadowRoot.querySelector(".card");
      if (cardBrand === "American Express"){
        cardElement.className = "card card--amex"
      }
      if (cardBrand === "Mastercard"){
        cardElement.classList.remove ("card--amex", "card--visa");    
        cardElement.classList.add ("card--master"); 
      }
       if (cardBrand === "Visa"){
        cardElement.classList.remove ("card--amex", "card--master");    
        cardElement.classList.add ("card--visa"); 
      }
    }
     
    setCardNumber(cardNumberText){
      const cardNumberElement = this.shadowRoot.querySelector(".card__number");
      cardNumberElement.innerHTML = this.formatCardNumber(cardNumberText);
    }
    
    setCardOwner(cardOwnerText){
      const cardOwnerElement = this.shadowRoot.querySelector(".card__owner-name");
      cardOwnerElement.innerHTML = cardOwnerText;
    }
    
    setCardExpiration(cardExpirationText){
      const cardExpirationElement = this.shadowRoot.querySelector(".card__expiration");
      cardExpirationElement.innerHTML = cardExpirationText;
    }  
  }
  customElements.define ("card-front", CardFront);  