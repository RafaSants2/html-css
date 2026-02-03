const nav = document.getElementById("links-nav");
const nome = document.getElementById("nome-dragao");
const rareza = document.getElementById("raridade");
const imgDragon = document.getElementById("foto-dragao");
const vel = document.getElementById("velo");
const duracao = document.getElementById("tempo");
const numero = document.getElementById("num-dragao");
const descricao = document.getElementById("desc");

nav.addEventListener("click", function (event) {
    if(event.target.tagName !== "A") return;
    event.preventDefault();


    if (event.target.getAttribute("href") === "#Dragao-arqueiro") {
        nome.textContent = "Dragão Arqueiro";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/V.png";
        imgDragon.src = "img/dragao/dr1.png";
        vel.textContent = "792";
        duracao.textContent = "23 HORAS";
        numero.textContent = "562";
        descricao.textContent = "Um toque de tecnologia para o arco e flecha tradicional: Este dragão consegue produzir flechas de laser nas costas e atirá-las com sua cauda. Elas nunca se esgotam."
    } else if (event.target.getAttribute("href") === "#Dragao-bolo") {
        nome.textContent = "Dragão Bolo";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/E.png";
        imgDragon.src = "img/dragao/dr2.png";
        vel.textContent = "861";
        duracao.textContent = "11 DIA 12 HORAS";
        numero.textContent = "955";
        descricao.textContent = "O Dragão Bolo não é tão doce quanto parece. Ele é muito invejoso e, se fizerem uma festa e não o convidarem, ele costuma aparecer de penetra. Segundo ele, a festa só começa quando ele chega";
    } else if (event.target.getAttribute("href") === "#dragao-chiclete") {
        nome.textContent = "Dragão Chiclete";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/C.png";
        imgDragon.src = "img/dragao/dr3.png";
        vel.textContent = "640";
        duracao.textContent = "13 HORAS";
        numero.textContent = "21";
        descricao.textContent = "Saltitante e feliz, você terá um novo melhor amigo com este Dragão! O Dragão Chiclete adora borboletas, açúcar e nuvens de verão.";
    } else if (event.target.getAttribute("href") === "#dragao-porco-espinho") {
        nome.textContent = "Dragão Porco-espinho";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/C.png";
        imgDragon.src = "img/dragao/dr4.png";
        vel.textContent = "645";
        duracao.textContent = "15 HORAS";
        numero.textContent = "51";
        descricao.textContent = "Este dragão gosta muito de pessoas, mas infelizmente o seu exterior espinhoso não agrada muito aos humanos. Vista uma armadura e vá brincar!";
    } else if (event.target.getAttribute("href") === "#dragao-cristalino") {
        nome.textContent = "Dragão Cristalino";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/L.png";
        imgDragon.src = "img/dragao/dr5.png";
        vel.textContent = "970";
        duracao.textContent = "2 DIAS 10 HORAS";
        numero.textContent = "92";
        descricao.textContent = "Se você gosta de coisinhas brilhantes e valiosas, vai adorar a Dragão Cristalino! Ela é muito rara e só aparece quando os planetas estão perfeitamente alinhados. Você terá muita sorte se a avistar!";
    } else if (event.target.getAttribute("href") === "#dragao-terra-puro") {
        nome.textContent = "Dragão Terra Puro";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/E.png";
        imgDragon.src = "img/dragao/dr6.png";
        vel.textContent = "862";
        duracao.textContent = "2 DIAS 04 HORAS";
        numero.textContent = "81";
        descricao.textContent = "Mais duro, mais pedregoso e mais cheio de arestas, o Dragão da Terra Puro é uma visão impressionante. Ele gosta de escalar montanhas, esmagar pedras e de praticamente todas as temperaturas!";
    } else if (event.target.getAttribute("href") === "#dragao-extrator-nobre") {
        nome.textContent = "Dragão Extrator Mutilação Nobre";
        nome.style.fontSize = "1.3em"
        rareza.src = "img/raridade/H.png";
        imgDragon.src = "img/dragao/dr7.png";
        vel.textContent = "985";
        duracao.textContent = "2 DIAS 12 HORAS";
        numero.textContent = "2053";
        descricao.textContent = "Os Extratores: eles se alimentam das almas dos seus inimigos. Após uma alma ser extraída do corpo, a conexão nunca mais pode ser restaurada. Vítimas do Dragão Extrator Mutilação Nobre perambulam pelos cemitérios sentindo-se vazias e perdidas. Elas até criaram um Grupo de Suporte para os Desalmados.";
    }
});