document.getElementById("mostrarBtn").addEventListener("click", function() {
    var caixa = document.getElementById("caixa");
    var icone = document.getElementById("icone");

    if (caixa.style.display === "none" || caixa.style.display === "") {
        caixa.style.display = "flex";
        icone.classList.add("icone_color");
        icone.classList.replace("bi-chevron-right", "bi-chevron-left"); // Troca o ícone

    } else {
        caixa.style.display = "none";
        icone.classList.remove("icone_color");
        icone.classList.replace("bi-chevron-left", "bi-chevron-right"); // Troca o ícone de volta

    }
});