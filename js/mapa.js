function initMap() {
    // Ubicación de la empresa
    const empresaUbicacion = { lat:36.711735, lng: -4.429049 };

    // Crear el mapa centrado en la ubicación de la empresa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: empresaUbicacion,
    });

    // Agregar un marcador en la ubicación de la empresa
    const marker = new google.maps.Marker({
        position: empresaUbicacion,
        map: map,
        title: 'Powerzone',
    });
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
}

function calcularRuta() {
    // Obtener la ubicación del cliente desde el campo de texto
    const ubicacionCliente = document.getElementById('ubicacionCliente').value;

    if (!ubicacionCliente) {
        alert('Por favor, introduce tu ubicación.');
        return;
    }

    // Configuración de la solicitud de direcciones
    const solicitud = {
        origin: ubicacionCliente, // Origen: ubicación del cliente
        destination: { lat:36.711735, lng: -4.429049 }, // Destino: ubicación de la empresa
        travelMode: google.maps.TravelMode.DRIVING, // Modo de viaje: Conduciendo
    };

    // Llamar al servicio de direcciones
    directionsService.route(solicitud, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            // Mostrar la ruta en el mapa
            directionsRenderer.setDirections(result);
        } else {
            alert('No se pudo calcular la ruta. Por favor, verifica tu ubicación.');
        }
    });
}