window.onload = function() {
    setTimeout(function() {
        var esconder = document.getElementById('esconder');
        esconder.style.display = 'none';
    }, 5000); //  5 seconds
};

document.getElementById("ativar_contato").addEventListener("click", function() {
    var contato_ativo = document.getElementById("contato_ativo");
    var menu__contato = document.getElementsByClassName("menu__contato")[0];

    if (contato_ativo.style.display === "none" || contato_ativo.style.display === "") {
        contato_ativo.style.display = "flex";
        contato_ativo.classList.add("contato_ativo");
        menu__contato.style.backgroundColor = "#F65100";
    } else {
        contato_ativo.style.display = "none";
        contato_ativo.classList.remove("contato_ativo");
        menu__contato.style.backgroundColor = "";
    }
});