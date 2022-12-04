
//  const edad = 18;



//  const entrada = alert ("Bienvenidx a Linkedog, aqui respetamos a nuestros amigos y somos responsables a la hora de realizar la solicitud de adopcion.Seamos empaticos y concientes!💘​💫​");
//  let ingreso = parseInt( prompt ("Ingrese su edad."));
//  let repetir = true;

// function coincide (ingreso) {
//    return (18 <= ingreso)
// };

// if (coincide(ingreso)) {
//       alert ("Listo, a adoptar! 💖​🐶​🐾​");
//       repetir = false;
// }
// while (repetir){
//    if(isNaN(ingreso)){
//       ingreso = parseInt(prompt("Por favor, ingrese un número válido!❌​"));
//       continue
//    }else if(coincide(ingreso)) {
//       alert ("Listo, a adoptar! 💖​🐶​🐾​");
//       repetir = false;
//    }else{ 
//       alert ("⚠️​Eres menor, debes hablar con tus mayores.⚠️​");
//       repetir = false;
//    }
// }

// Array con objeto //
// const perrosEnAdopcion = [
//    {
//        id: 1,
//        nombre: "Mara",
//        edad: 9,
//        Tamaño: 'mediana',
//        Salud: "Castrada y vacunada",
//        Social: "Se lleva bien con otros animales"
//    },
//    {
//       id: 2,
//       nombre: "Pamela",
//       edad: 2,
//       Tamaño: 'mediana',
//       Salud: "Castrada y vacunada",
//       Social: "Se lleva bien con otros animales"
//    },
//    {
//       id: 3,
//       nombre: "Paulita",
//       edad: "4 meses",
//       Tamaño: 'Indefinido',
//       Salud: "Castrada y vacunada",
//       Social: "Se lleva bien con otros animales"
//    },
//    {
//       id: 4,
//       nombre: "Voldemort",
//       edad: 3/4,
//       Tamaño: 'Grande',
//       Salud: "Castrado y vacunado",
//       Social: "Se lleva bien con otros animales"
//    },
//    {
//       id: 5,
//       nombre: "Yumina",
//       edad: "6 meses",
//       Tamaño: 'mediana',
//       Salud: "Castrada y vacunada",
//       Social: "Se lleva bien con otros animales"
//    },
//    {
//       id: 6,
//       nombre: "Ágata",
//       edad: 4,
//       Tamaño: 'mediana',
//       Salud: "Castrada y vacunada",
//       Social: "Se lleva bien con otros animales"
//    },
//    {
//       id: 7,
//       nombre: "Dominga",
//       edad: 7/8,
//       Tamaño: 'Grande',
//       Salud: "Castrada y vacunada",
//       Social: "Se lleva bien con otros animales"
//    },
//    {
//       id: 8,
//       nombre: "Chuleta",
//       edad: 6,
//       Tamaño: 'Pequeña',
//       Salud: "Castrada y vacunada",
//       Social: "Se lleva bien con otros animales"
//    },
// ];

// metodo de busqueda con FIND 
// *let valorBuscado = "Mara"
// const busqueda = perrosEnAdopcion.find(perrosEnAdopcion => perrosEnAdopcion.nombre === valorBuscado)
// console.log(busqueda)

// DOM + EVENTO

   const adopbutton = document.getElementsByClassName('adopbutton');
   const perrocontainer = document.getElementsByClassName('mascota');
   const formadop = document.getElementsByClassName('formadop');

   for(let i = 0; i < adopbutton.length; i++){
      adopbutton[i].addEventListener('click' , function onclick(e){
         console.log("test");
         e.target.style.display = "none";
         formadop[i].style.display = "block";
      }); 
   }
   document.querySelectorAll('.bottonadop').onclick = function(){
   alert('Gracias por enviar tu solicitud!💖​🐶​🐾');
  }   

// JSON STORAGE 
let allFormAdop = document.querySelectorAll('.formadop')
allFormAdop.forEach((form,index)=> {
   form.addEventListener('submit', (event)=>{
      guardarSolicitud(event, index)}
      );
})

      function guardarSolicitud(event,index){
      event.preventDefault();
       const infoUsuario = {
         nombre: document.querySelectorAll('.txtname')[index].value,
         celular: document.querySelectorAll('.txtcelular')[index].value,
         correo: document.querySelectorAll('.txtcorreo')[index].value,
         perrito: document.querySelectorAll('.selectdog')[index].value,
         mensaje: document.querySelectorAll('.txtmensaje')[index].value,

       }   
   
    addAdoptionPet(infoUsuario);
    }

 
 
 
 let AdoptionList = [];

 function addAdoptionPet(infoUsuario) {

            console.log(infoUsuario);
            AdoptionList.push(infoUsuario);
            localStorageAdoptionList(AdoptionList)
 }

function getAdoptionList(){
   let storedList =localStorage.getItem('localAdoptionList');
   if(storedList == null){
      AdoptionList =[]; 
   }else{
      AdoptionList = JSON.parse(storedList);
   }
   return AdoptionList;
}

function localStorageAdoptionList(plist){
   localStorage.setItem('localAdoptionList', JSON.stringify(plist));
}