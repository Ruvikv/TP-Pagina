// Función para obtener los datos de la API
async function getDolares() {
    try {
        let response = await fetch('https://dolarapi.com/v1/dolares');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:",error);
    }
}

// Función para actualizar las pestañas
async function updateTabs() {
    // Obtengo el array de dólares
    const dolares = await getDolares();
    // Para cada dólar, actualizo la información en la pestaña correspondiente
    dolares.forEach(dolar => {
        const dolarElement = document.getElementById(`v-pills-${dolar.casa}`);
        // Formateo la fecha para que esté en la zona horaria de Argentina
        const fecha = new Date(dolar.fechaActualizacion);
        const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
        // Cargo toda la informacion del dolar en parrafos
        dolarElement.innerHTML = `
            <p>Moneda: ${dolar.moneda}</p>
            <p>Nombre: Dolar ${dolar.nombre}</p>
            <p>Compra: $${dolar.compra}</p>
            <p>Venta: $${dolar.venta}</p>
            <p>Ultima actualizacion: ${fecha.toLocaleString('es-AR', opciones)}</p>
        `;
    });
}

// Llamo a la función para actualizar las pestañas
updateTabs();