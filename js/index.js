$(document).ready(function() {
    $("form").submit(function(event) {
        
      let nombre = $("#nombre").val();
      let apellido = $("#apellido").val();
      let correo = $("#email").val();
      let genero = $("#generos").val();
      let fecha = $("#fecha").val();
  
      alert("Nombre: " + nombre + "\nApellido: " + apellido + "\nCorreo electrónico: " + correo + "\nGéneros: " + genero + "\nFecha de nacimiento: " + fecha);
  
      event.preventDefault();
    });
  });