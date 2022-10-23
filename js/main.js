 const edad = 18;

 let entrada = alert ("Bienvenidx a Linkedog, aqui respetamos a nuestros amigos y somos responsables a la hora de realizar la solicitud de adopcion.Seamos empaticos y concientes!");
 let ingreso = prompt ("Ingrese su edad");
 let coincide = (edad <= ingreso);

 if (coincide) {
    alert ("Ahora si, a adoptar!");
 }else{ 
    alert ("Eres menor, debes hablar con tus mayores.");
    window.location.src = "../pages/menor.html";
 }


for (let i=0; i <=16; i=i+2){
    console.log(i);
}

