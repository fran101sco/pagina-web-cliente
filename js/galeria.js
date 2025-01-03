document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const images = [
        "../images/galeria/cinta.jpg",
        "../images/galeria/cuerda.jpg",
        "../images/galeria/grupo.jpg",
        "../images/galeria/pesa.jpg",
        "../images/galeria/estira.jpg",
        "../images/galeria/comba.jpg"
    ];

    // Generar las imágenes dinámicamente
    images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagen de la galería";
        gallery.appendChild(img);
    });
});
