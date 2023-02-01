const persona = {
    nombre: "Mitchell",
    apellido: "Cooper",
    email: "mitchell.cooper@example.com",
    telefono: "(302) 530-9400",
    cumple: "10/1/1987",
    direccion: "8637 Smokey Ln",
    rol:"Dirección de proyectos"
  }
  
  console.log(persona);
  
  const fotoPersona = document.getElementById("fotopersona");
  const informacion = document.getElementById("info");
  const clicEmail = document.getElementById("email");
  const clicTelefono = document.getElementById("telefono");
  const clicCumple = document.getElementById("cumple");
  const clicDireccion = document.getElementById("direccion");
  const btnhabilidades = document.getElementById("btnhabilidades");
  const btnexperiencia = document.getElementById("btnexperiencia");
  const cerrarhabilidades = document.getElementById("cerrarhabilidades");
  const cerrarexperiencia = document.getElementById("cerrarexperiencia");
  
  const nombre = document.getElementById('nombre').innerHTML=persona.nombre + " " + persona.apellido;
  informacion.innerHTML=persona.rol;
  
  btnhabilidades.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("HABLI");
    document.getElementById("idhabilidades").style.display ="block" ;
  })
  
  cerrarhabilidades.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById("idhabilidades").style.display ="none" ;
  })
  
  btnexperiencia.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("HABLI");
    document.getElementById("idexperiencia").style.display ="block" ;
  })
  
  cerrarexperiencia.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById("idexperiencia").style.display ="none" ;
  })
  
  
  // Funcion para cambiar valor de un texto
  
  function modInfo(valor) {
    informacion.textContent = valor;
  }
  
  fotoPersona.addEventListener('click', function (e) {
    e.preventDefault();
    modInfo(persona.rol);
  })
  
  clicEmail.addEventListener('mouseover', function (e) {
    e.preventDefault();
    modInfo(persona.email);
  })
  
  clicCumple.addEventListener('mouseover', function (e) {
    e.preventDefault();
    modInfo(persona.cumple);
  })
  
  clicTelefono.addEventListener('mouseover', function (e) {
    e.preventDefault();
    modInfo(persona.telefono);
  })
  
  clicDireccion.addEventListener('mouseover', function (e) {
    e.preventDefault();
    modInfo(persona.direccion);
  })