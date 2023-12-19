document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && telefono && correo && mensaje) {
            alert('Mensaje enviado correctamente');
            // Aquí podrías enviar los datos a través de AJAX o realizar otras acciones
            
            // Borrar los datos después de enviar el mensaje
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('mensaje').value = '';
        } else {
            alert('Por favor, completa todos los campos');
        }
    });
});
