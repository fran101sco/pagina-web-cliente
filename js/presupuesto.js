const formPresupuesto = document.getElementById("formPresupuesto");
const presupuestoFinal = document.getElementById("presupuestoFinal");
const producto = document.getElementById("producto");
const plazo = document.getElementById("plazo");
const extras = document.querySelectorAll('input[name="extra"]');

function calcularPresupuesto() {
    let total = parseFloat(producto.options[producto.selectedIndex].dataset.precio);
    total *= parseInt(plazo.value);

    extras.forEach(extra => {
        if (extra.checked) {
            total += parseFloat(extra.value);
        }
    });

    presupuestoFinal.textContent = `${total}€`;
}

producto.addEventListener("change", calcularPresupuesto);
plazo.addEventListener("input", calcularPresupuesto);
extras.forEach(extra => {
    extra.addEventListener("change", calcularPresupuesto);
});

// Validación del formulario de presupuesto
formPresupuesto.addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const terminos = document.getElementById("terminos").checked;

    if (!/^[a-zA-Z]{1,15}$/.test(nombre)) {
        alert("El nombre no es válido.");
        event.preventDefault();
    }

    if (!/^[a-zA-Z\s]{1,40}$/.test(apellidos)) {
        alert("Los apellidos no son válidos.");
        event.preventDefault();
    }

    if (!/^\d{9}$/.test(telefono)) {
        alert("El teléfono no es válido.");
        event.preventDefault();
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert("El correo electrónico no es válido.");
        event.preventDefault();
    }

    if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
        event.preventDefault();
    }
});