const nav = document.getElementById("links-nav");

nav.addEventListener("click", function (event) { /*Nessa linha 3, eu fiz com que a váriavel "nav" tenha o atributo de ADICIONAR EVENTO, sendo esse evento de "CLICK", com a function event*/
    const link = event.target;

    if (link.tagName === "A") {
        event.preventDefault();

        const acao = link.dataset.acao;
        console.log("Clicou em:", acao);

        //aqui você decide o que acontece
    }
})