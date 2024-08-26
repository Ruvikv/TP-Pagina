
// Localiza el formulario del administrador de juegos
const adminForm = document.getElementById('formulario-administrador');
adminForm.addEventListener('submit', (event) => {
    // Evita que el formulario se envie
    event.preventDefault();

    // Localiza los elementos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const desarrollador = document.getElementById('desarrollador').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const imagen = document.getElementById('imagen');
    const plataforma = document.getElementById('plataforma').value;

    // Variable logica para controlar si el formulario es valido o no
    let esValido = true;

    // Valida que el nombre no este vacio
    if (nombre === '') {
        document.getElementById('nombre').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('nombre').classList.remove('is-invalid');
        document.getElementById('nombre').classList.add('is-valid');
    }
    
    // Valida que el desarrollador no este vacio
    if (desarrollador === '') {
        document.getElementById('desarrollador').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('desarrollador').classList.remove('is-invalid');
        document.getElementById('desarrollador').classList.add('is-valid');
    }

    // Valida que la descripcion no este vacia
    if (descripcion === '') {
        document.getElementById('descripcion').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('descripcion').classList.remove('is-invalid');
        document.getElementById('descripcion').classList.add('is-valid');
    }

    // Valida que el genero no este vacio
    if (genero === '') {
        document.getElementById('genero').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('genero').classList.remove('is-invalid');
        document.getElementById('genero').classList.add('is-valid');
    }

    // Valida que se haya seleccionado almenos una imagen
    if (imagen.files.length === 0) {
        document.getElementById('imagen').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('imagen').classList.remove('is-invalid');
        document.getElementById('imagen').classList.add('is-valid');
    }

    // Valida que se haya selecciona una opcion para la plataforma
    if (plataforma === '') {
        document.getElementById('plataforma').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('plataforma').classList.remove('is-invalid');
        document.getElementById('plataforma').classList.add('is-valid');
    }

    // Si el formulario es valido, su envio es manejeado por otro archivo que hace el POST a la api
    if (esValido) {
        const formData = new FormData(event.target);
        // Me quedo solo con el nombre de la imagen
        formData.set('imagen', imagen.files[0].name);
        postJuegos(formData, adminForm);
    } else {
        alert('Por favor verifique los datos ingresados');
    }
});