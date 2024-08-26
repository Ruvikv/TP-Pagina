
// Función para hacer un POST a la API
async function postJuegos(formData, adminForm) {
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    // Defino las opciones que voy a mandar a la API
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    try {
        let response = await fetch('http://localhost:8080/integrador_war_exploded/juegos', options);
        let text = await response.text();
        let result = text ? JSON.parse(text) : {};
        if (response.status === 200) {
            console.log("Formulario enviado con exito: ", result);
            adminForm.reset();
            location.reload();
        }
    } catch (error) {
        console.error("Error al enviar el formulario: ", error);
    }
}