
 const edad = 18;

 let entrada = alert ("Bienvenidx a Linkedog, aqui respetamos a nuestros amigos y somos responsables a la hora de realizar la solicitud de adopcion.Seamos empaticos y concientes!");
 let ingreso = parseInt( prompt ("Ingrese su edad."));
 let coincide = (edad <= ingreso);
 let repetir = true;


while (repetir) {
   if (coincide) {
      alert ("Ahora si, a adoptar!");
      repetir= false;
  
     }else if (ingreso<edad){ 
      alert ("Eres menor, debes hablar con tus mayores.");
      repetir= false;
     }else {
      ingreso = parseInt( prompt ("Por favor, ingrese un numero valido"));
      coincide = (edad <= ingreso);
     }
}   
   
