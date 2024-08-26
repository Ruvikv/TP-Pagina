
// Localiza el formulario y evita que se envie
const form = document.getElementById('formulario-login');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Localiza los campos del formulario
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const checkbox = document.getElementById('conditionsCheck').checked;
    let isValid = true;

    // Valida que el email tenga un formato correcto
    if (!isValidEmail(email)) {
        document.getElementById('email').classList.add('is-invalid');
        isValid = false;
    } else {
        // Si el email es correcto, cambia la clase a 'is-valid'
        document.getElementById('email').classList.remove('is-invalid');
        document.getElementById('email').classList.add('is-valid');
    }

    // Valida que la contraseña no sea menor a 8 caracteres
    if (password.length < 8) {
        document.getElementById('password').classList.add('is-invalid');
        isValid = false;
    } else {
        // Si la contraseña es correcta, cambia la clase a 'is-valid'
        document.getElementById('password').classList.remove('is-invalid');
        document.getElementById('password').classList.add('is-valid');
    }

    // Valida que el checkbox este seleccionado
    if (!checkbox) {
        document.getElementById('conditionsCheck').classList.add('is-invalid');
        isValid = false;
    } else {
        // Si el checkbox esta seleccionado, cambia la clase a 'is-valid'
        document.getElementById('conditionsCheck').classList.remove('is-invalid');
        document.getElementById('conditionsCheck').classList.add('is-valid');
    }

    // Si el formulario esta validado, se envia
    if (isValid) {
        form.submit();
        alert('Formulario enviado');
    } else {
        // Si el formulario no esta validado, muestra un mensaje de error
        alert('Por favor, verifica los datos ingresados.');
    }
});

function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}