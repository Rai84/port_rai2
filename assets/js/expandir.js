document.getElementById("expandir").addEventListener("click", function() {
    var expandido = document.getElementById("expandido");
    // var expandir = document.getElementById("expandir");
    var icone2 = document.getElementById("icone2");

    if (expandido.style.display === "none" || expandido.style.display === "") {
        expandido.style.display = "flex";
        expandido.classList.add("expandido");
        icone2.classList.replace("bi-chevron-compact-right", "bi-chevron-compact-left");
        // expandir.style.left = "calc(70vw - 7px)";
    } else {
        expandido.style.display = "none";
        expandido.classList.remove("expandido");
        icone2.classList.replace("bi-chevron-compact-left", "bi-chevron-compact-right");
        // expandir.style.left = "32px";
    }
});

