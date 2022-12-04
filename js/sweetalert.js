(async () => {
    const {value: ok} = await Swal.fire({
        title:"Bienvenidx a Linkedog", 
        text: "aqui respetamos a nuestros amigos y somos responsables a la hora de realizar la solicitud de adopcion.Seamos empaticos y concientes!💘​💫​",
        confirmButtonColor: "#e496bd"
    }); 
    if (ok) {
        Swal.fire({
        title: 'Cuantos años tienes?',
        input: 'range',
        inputLabel: 'Tengo:',
        inputAttributes: {
          min: 8,
          max: 100,
          step: 1
        },
        inputValue: 18,
        confirmButtonColor: "#e496bd"
      });}
})()
