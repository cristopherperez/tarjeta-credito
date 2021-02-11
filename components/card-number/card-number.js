class CardNumber extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#card-number", this);
    }
    connectedCallback(){
     const elementoInput = this.shadowRoot.querySelector("input");
     
      elementoInput.addEventListener("keyup", (event) => {
        const cardNumberChanged = new CustomEvent("cardNumberChanged", { 
          detail: {
            cardNumber: elementoInput.value,
          }
        });
       this.dispatchEvent(cardNumberChanged);
      });
    }
    getValue(){
       const elementoInput = this.shadowRoot.querySelector("input");
       return elementoInput.value;
    }
  }
  
  customElements.define ("card-number", CardNumber);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  REGLAS DE VALIDACIÓN PARA EL NÚMERO DE LA TARJETA
  
  a) No se puede escribir más de 16 caracteres.
  b) No se pueden escribir letras.
  c) Verificar que la tarjeta sea un número Luhn válido (esto es, llamar a una función isLuhnValid que hace un cálculo para verificar que el número de tarjeta sea coherente).
  
  REGLAS DE COMPORTAMIENTO
  
  Se pinta la tarjeta con una estética particular, según la marca de la tarjeta.
  
  La marca de la tarjeta se puede deducir a partir del primer dígito de la tarjeta:
  
  - Si es 3, es una American Express (usar clase card--amex).
  - Si el 4, es una Visa (usar clase card--visa).
  - Si el 5, es una Master Card (usar clase card--master).
  
  Cada vez que se escriba o se borre un caracter del campo, se debe actualizar el texto de la ilustración de la tarjeta.
  */