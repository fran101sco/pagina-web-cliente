document.addEventListener("DOMContentLoaded", function () {
    const noticiasDiv = document.getElementById("noticias");
    fetch('data/noticias.json')
        .then(response => response.json())
        .then(data => {
            data.noticias.forEach(noticia => {
                const noticiaDiv = document.createElement("div");
                noticiaDiv.className = "noticia";
                noticiaDiv.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.contenido}</p>`;
                noticiasDiv.appendChild(noticiaDiv);
            });
        })
        .catch(error => console.error("Error al cargar las noticias:", error));
});
