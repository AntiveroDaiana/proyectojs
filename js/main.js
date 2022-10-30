
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

// Array con objeto //
const perrosEnAdopcion = [
   {
       id: 1,
       nombre: "Mara",
       edad: 9,
       Tamaño: 'mediana',
       Salud: "Castrada y vacunada",
       Social: "Se lleva bien con otros animales"
   },
   {
      id: 2,
      nombre: "Pamela",
      edad: 2,
      Tamaño: 'mediana',
      Salud: "Castrada y vacunada",
      Social: "Se lleva bien con otros animales"
   },
   {
      id: 3,
      nombre: "Paulita",
      edad: "4 meses",
      Tamaño: 'Indefinido',
      Salud: "Castrada y vacunada",
      Social: "Se lleva bien con otros animales"
   },
   {
      id: 4,
      nombre: "Voldemort",
      edad: 3/4,
      Tamaño: 'Grande',
      Salud: "Castrado y vacunado",
      Social: "Se lleva bien con otros animales"
   },
   {
      id: 5,
      nombre: "Yumina",
      edad: "6 meses",
      Tamaño: 'mediana',
      Salud: "Castrada y vacunada",
      Social: "Se lleva bien con otros animales"
   },
   {
      id: 6,
      nombre: "Ágata",
      edad: 4,
      Tamaño: 'mediana',
      Salud: "Castrada y vacunada",
      Social: "Se lleva bien con otros animales"
   },
   {
      id: 7,
      nombre: "Dominga",
      edad: 7/8,
      Tamaño: 'Grande',
      Salud: "Castrada y vacunada",
      Social: "Se lleva bien con otros animales"
   },
   {
      id: 8,
      nombre: "Chuleta",
      edad: 6,
      Tamaño: 'Pequeña',
      Salud: "Castrada y vacunada",
      Social: "Se lleva bien con otros animales"
   },
];

// metodo de busqueda con FIND 
let valorBuscado = "Mara"
const busqueda = perrosEnAdopcion.find(perrosEnAdopcion => perrosEnAdopcion.nombre === valorBuscado)
console.log(busqueda)

