function trocarImagem(img) {
    document.getElementById("imgPrincipal").src = img.src;
}

function compartilharWhats() {
    let url = window.location.href;
    window.open("https://wa.me/?text=Olha%20esse%20produto%20lindo!%20" + url);
}

function compartilharInsta() {
    window.open("https://www.instagram.com/boutiquerycca/", "_blank");
}

function copiarLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado!");
}
