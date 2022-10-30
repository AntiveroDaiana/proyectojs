
 const edad = 18;

 const entrada = alert ("Bienvenidx a Linkedog, aqui respetamos a nuestros amigos y somos responsables a la hora de realizar la solicitud de adopcion.Seamos empaticos y concientes!💘​💫​");
 let ingreso = parseInt( prompt ("Ingrese su edad."));
 let repetir = true;

function coincide (ingreso) {
   return (18 <= ingreso)
};

if (coincide(ingreso)) {
      alert ("Listo, a adoptar! 💖​🐶​🐾​");
      repetir = false;
}
while (repetir){
   if(isNaN(ingreso)){
      ingreso = parseInt(prompt("Por favor, ingrese un número válido!❌​"));
      continue
   }else if(coincide(ingreso)) {
      alert ("Listo, a adoptar! 💖​🐶​🐾​");
      repetir = false;
   }else{ 
      alert ("⚠️​Eres menor, debes hablar con tus mayores.⚠️​");
      repetir = false;
   }
}
