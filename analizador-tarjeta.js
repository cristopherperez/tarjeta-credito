class AnalizadorTarjeta {
    constructor(numeroTarjeta){
      this.numeroTarjeta = numeroTarjeta;
    }
    obtenerNumSinEspacio() {
      if (this.numeroTarjeta.includes(" ")) {
        return this.numeroTarjeta.split(" ").join("");
      } else { 
        return this.numeroTarjeta;
      }
    }
  
    identificarTarjeta(){
      if(this.numeroTarjeta.startsWith("3")){
      return "American Express"
      }
      if(this.numeroTarjeta.startsWith("4")){
      return "Visa"
      }
      if(this.numeroTarjeta.startsWith("5")){
      return "Mastercard"
      } 
    }
  
    medirLongitudTarjeta(marcaTarjeta){
     if (marcaTarjeta === "American Express"){
       return 15
     }
     if (marcaTarjeta === "Visa"||
        marcaTarjeta ==="Mastercard"){
       return 16
     }
    }
    obtenerBin(numeroTarjeta){
      return numeroTarjeta.substr(0,6);
  }
    obtenerLongCodSeguridad(marcaTarjeta){
      if (marcaTarjeta === "American Express"){
       return {ubicacion: "Frente", digitos: "4"}
      }
       if (marcaTarjeta === "Visa"||
        marcaTarjeta ==="Mastercard"){
       return {ubicacion:"dorso", digitos:"3"}
     }
    }
  
    obtenerInformacion() {
      const numSinEspacio = this.obtenerNumSinEspacio();
      const marcaTarjeta = this.identificarTarjeta();
      const longitudTarjeta = this.medirLongitudTarjeta(marcaTarjeta);
      const numeroBin = this.obtenerBin(numSinEspacio);
      const codigoDeSeguridad = this.obtenerLongCodSeguridad(marcaTarjeta);
      return {
        numSinEspacio, marcaTarjeta, longitudTarjeta, numeroBin, codigoDeSeguridad
      }       
    }
  }