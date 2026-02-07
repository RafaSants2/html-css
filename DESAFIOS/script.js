const nav = document.getElementById("links-nav");
const nome = document.getElementById("nome-dragao");
const rareza = document.getElementById("raridade");
const imgDragon = document.getElementById("foto-dragao");
const vel = document.getElementById("velo");
const duracao = document.getElementById("tempo");
const numero = document.getElementById("num-dragao");
const descricao = document.getElementById("desc");
const botao_left = document.getElementById("arrow-left")
const botao_right = document.getElementById("arrow-right")
const elementosPorDragao = {
    dragao1: ["eletrico.png", "gelo.png", "sombrio.png"],
    dragao2: ["terra.png", "luz.png", "puro.png", "felicidade.png"],
    dragao3: ["primordial.png", "planta.png", "luz.png", "mar.png"],
    dragao4: ["terra.png", "sombrio.png"],
    dragao5: ["lendario.png"],
    dragao6: ["terra.png", "puro.png"],
    dragao7: ["tempo.png", "alma.png", "sombrio.png", "luz.png"],
    dragao8: ["eletrico.png"],
    dragao9: ["fogo.png", "gelo.png"],
    dragao10: ["sombrio.png", "mar.png"],
    dragao11: ["primordial.png", "alma.png", "sombrio.png", "sonho.png"],
    dragao12: ["lendario.png", "luz.png", "alma.png", "sonho.png"],
    dragao13: ["guerra.png", "sombrio.png", "planta.png"],
    dragao14: ["fogo.png", "eletrico.png"],
    dragao15: ["luz.png", "metal.png", "fogo.png"],
    dragao16: ["lendario.png"],
    dragao17: ["terra.png", "terra.png"],
    dragao18: ["terra.png", "fogo.png", "mar.png"],
    dragao19: ["puro.png", "sombrio.png"],
    dragao20: ["puro.png", "vento.png", "luz.png", "fogo.png"],
    
};
const divElements = document.getElementById("elementos");

function trocarElementos(nomeDragao) {
    // limpa tudo
    divElements.textContent = "";

    // percorre os elementos do dragão
    elementosPorDragao[nomeDragao].forEach(elemento => {
        const img = document.createElement("img");
        img.src = `img/elemento/${elemento}`;
        
        img.alt = "elemento do Dragão";
        divElements.appendChild(img);
    });
}

nav.addEventListener("click", function (event) {
    if(event.target.tagName !== "A") return;
    event.preventDefault();

    if (event.target.tagName === "A") {
        const links = nav.querySelectorAll("a");
        links.forEach(link => link.classList.remove("ativo"));

        event.target.classList.add("ativo");
    } /* ISSO FAZ COM QUE, SE O EVENTO FOR DE UMA TAG "A", SERÁ CRIADO UMA VARIAVEL CHAMADA "LINKS" QUE PEGA TODAS AS TAG's "A" NO HTML QUE ESTIVEREM DENTRO DO "NAV", COM ISSO, PARA CADA TAG "A" DENTRO DESSA "NAV", VAI RECEBER UMA CONFIGURAÇÃO NO CSS CHAMADA ".ATIVO", ONDE PODE SER ATIVADE E DESATIVADA A CADA CLICK. */

    //PRIMERO -----------------------------------------------
    if (event.target.getAttribute("href") === "#Dragao-arqueiro") {
        nome.textContent = "Dragão Arqueiro";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/V.png";
        imgDragon.src = "img/dragao/dr1.png";
        vel.textContent = "792";
        duracao.textContent = "23 HORAS";
        numero.textContent = "562";
        descricao.textContent = "Um toque de tecnologia para o arco e flecha tradicional: Este dragão consegue produzir flechas de laser nas costas e atirá-las com sua cauda. Elas nunca se esgotam."
    } else if (event.target.getAttribute("href") === "#Dragao-bolo") {//SEGUNDO --------------------------
        nome.textContent = "Dragão Bolo";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/E.png";
        imgDragon.src = "img/dragao/dr2.png";
        vel.textContent = "861";
        duracao.textContent = "1 DIA 12 HORAS";
        numero.textContent = "955";
        descricao.textContent = "O Dragão Bolo não é tão doce quanto parece. Ele é muito invejoso e, se fizerem uma festa e não o convidarem, ele costuma aparecer de penetra. Segundo ele, a festa só começa quando ele chega";
        
    } else if (event.target.getAttribute("href") === "#dragao-yggdrasil") {//TERCERO -------------------------------------------
        nome.textContent = "Dragão Yggdrasil";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/H.png";
        imgDragon.src = "img/dragao/dr3.png";
        vel.textContent = "896";
        duracao.textContent = "2 DIAS 12 HORAS";
        numero.textContent = "922";
        descricao.textContent = "Dragões Heroicos evoluem para a juventude no nível 10 e tornam-se adultos no nível 20. Como o deus da natureza, esta criatura majestosa é tão poderosa que qualquer planta floresce em suas mãos e a vegetação cresce por onde ele passa. Com dos Dragões Fada sob as asas, ele não desistirá até que suas amadas florestas estejam a salvo.";
    } else if (event.target.getAttribute("href") === "#dragao-porco-espinho") { //CUARTO --------------------------
        nome.textContent = "Dragão Porco-espinho";
        nome.style.fontSize = "1.6em"
        rareza.src = "img/raridade/C.png";
        imgDragon.src = "img/dragao/dr4.png";
        vel.textContent = "645";
        duracao.textContent = "15 HORAS";
        numero.textContent = "51";
        descricao.textContent = "Este dragão gosta muito de pessoas, mas infelizmente o seu exterior espinhoso não agrada muito aos humanos. Vista uma armadura e vá brincar!";
    } else if (event.target.getAttribute("href") === "#dragao-cristalino") { //QUINTO --------------------------------
        nome.textContent = "Dragão Cristalino";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/L.png";
        imgDragon.src = "img/dragao/dr5.png";
        vel.textContent = "970";
        duracao.textContent = "2 DIAS 10 HORAS";
        numero.textContent = "92";
        descricao.textContent = "Se você gosta de coisinhas brilhantes e valiosas, vai adorar a Dragão Cristalino! Ela é muito rara e só aparece quando os planetas estão perfeitamente alinhados. Você terá muita sorte se a avistar!";
    } else if (event.target.getAttribute("href") === "#dragao-terra-puro") { //SEXTO ------------------------------------ 
        nome.textContent = "Dragão Terra Puro";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/E.png";
        imgDragon.src = "img/dragao/dr6.png";
        vel.textContent = "862";
        duracao.textContent = "2 DIAS 04 HORAS";
        numero.textContent = "81";
        descricao.textContent = "Mais duro, mais pedregoso e mais cheio de arestas, o Dragão da Terra Puro é uma visão impressionante. Ele gosta de escalar montanhas, esmagar pedras e de praticamente todas as temperaturas!";
    } else if (event.target.getAttribute("href") === "#dragao-extrator-nobre") { //SÉPTIMO -------------------------------
        nome.textContent = "Dragão Extrator Mutilação Nobre";
        nome.style.fontSize = "1em"
        rareza.src = "img/raridade/H.png";
        imgDragon.src = "img/dragao/dr7.png";
        vel.textContent = "985";
        duracao.textContent = "2 DIAS 12 HORAS";
        numero.textContent = "2053";
        descricao.textContent = "Os Extratores: eles se alimentam das almas dos seus inimigos. Após uma alma ser extraída do corpo, a conexão nunca mais pode ser restaurada. Vítimas do Dragão Extrator Mutilação Nobre perambulam pelos cemitérios sentindo-se vazias e perdidas. Elas até criaram um Grupo de Suporte para os Desalmados.";
    } else if (event.target.getAttribute("href") === "#dragao-eletrico") { //OCTAVO ------------------------------------------------
        nome.textContent = "Dragão Elétrico";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/C.png";
        imgDragon.src = "img/dragao/dr8.png";
        vel.textContent = "651";
        duracao.textContent = "30 MIN";
        numero.textContent = "18";
        descricao.textContent = "A fábula nos conta que este dragão nasceu em uma grande tempestade que ocorreu na Idade Média, quando um dragão comum foi atingido por um raio. Desde aquele dia, você pode vê-los nos céus, à procura de um choque.";
    } else if (event.target.getAttribute("href") === "#dragao-fogofrio") { //NOVENO -------------------------------------------------------
        nome.textContent = "Dragão Fogo-frio";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/C.png";
        imgDragon.src = "img/dragao/dr9.png";
        vel.textContent = "652";
        duracao.textContent = "15 HORAS";
        numero.textContent = "40";
        descricao.textContent = "Se você acha auroras boreais incríveis, espere até ver este Dragão voar em suas ilhas! É tão frio quanto gelo e tão quente quanto fogo e nunca se cansará de soprar e bufar.";
    } else if (event.target.getAttribute("href") === "#dragao-pirata") { //DÉCIMO ---------------------------------------------------------
        nome.textContent = "Dragão Pirata";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/R.png";
        imgDragon.src = "img/dragao/dr10.png";
        vel.textContent = "716";
        duracao.textContent = "18 HORAS";
        numero.textContent = "54";
        descricao.textContent = "Ahoy, amantes de Dragões! Este Dragão especial será a pérola de sua coleção de Dragões. Suba a bordo e prepare-se para algumas aventuras ousadas no mar!";
    } else if (event.target.getAttribute("href") === "#dragao-encapuzado-nobre") { //DÉCIMO-PRIMERO ---------------------------------------
        nome.textContent = "Dragão Crítico Encapuzado Nobre";
        nome.style.fontSize = "1em"
        rareza.src = "img/raridade/H.png";
        imgDragon.src = "img/dragao/dr11.png";
        vel.textContent = "933";
        duracao.textContent = "2 DIAS 12 HORAS";
        numero.textContent = "2115";
        descricao.textContent = "Trupe Crítica: os ataques normais deles tornam-se acertos críticos! Ao combinar o poder dos quatro cajados Críticos, o Dragão Crítico Encapuzado Nobre dominou a arte dos acertos críticos. Há rumores de que uma quinta fonte de energia repousa sob o seu manto, mas ela ainda não se revelou em combate.";
    } else if (event.target.getAttribute("href") === "#dragao-brilhante") { //DÉCIMO-SEGUNDO ---------------------------------------
        nome.textContent = "Dragão Encouraçado Cintilante";
        nome.style.fontSize = "1.1em"
        rareza.src = "img/raridade/M.png";
        imgDragon.src = "img/dragao/dr12.png";
        vel.textContent = "2157";
        duracao.textContent = "2 DIAS";
        numero.textContent = "998";
        descricao.textContent = "Uma defesa brilhante significa cegar seus oponentes! O Dragão Encouraçado Cintilante usa seus poderes angélicos para manter distância do inimigo, deixando-o se cansar antes de desferir um golpe celestial.";
    } else if (event.target.getAttribute("href") === "#dragao-duende") { //DÉCIMO-TERCERO ---------------------------------------
        nome.textContent = "Dragão Duende";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/V.png";
        imgDragon.src = "img/dragao/dr13.png";
        vel.textContent = "786";
        duracao.textContent = "17 HORAS";
        numero.textContent = "595";
        descricao.textContent = "Proteja suas abóboras: o sorrateiro Dragão Duende está de olho! Ele é obcecado por roubar todas as abóboras que encontra nos quintais das pessoas. Por isso, o Halloween é a época do ano que ele mais ama.";
    } else if (event.target.getAttribute("href") === "#dragao-marciais") { //DÉCIMO-CUARTO ---------------------------------------
        nome.textContent = "Dragão Artes Marciais";
        nome.style.fontSize = "1.6em"
        rareza.src = "img/raridade/R.png";
        imgDragon.src = "img/dragao/dr14.png";
        vel.textContent = "726";
        duracao.textContent = "03 HORAS";
        numero.textContent = "264";
        descricao.textContent = "Um mestre em Ansatsuken, sempre melhorando, não importa a dificuldade, não importa o custo. Ele não pode evitar lutar por inocentes quando vê injustiça. Ele é o único que domina a técnica Hadoken.";
    } else if (event.target.getAttribute("href") === "#dragao-draluxe") { //DÉCIMO-QUINTO ---------------------------------------
        nome.textContent = "Dragão Draluxo";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/L.png";
        imgDragon.src = "img/dragao/dr15.png";
        vel.textContent = "969";
        duracao.textContent = "2 DIAS";
        numero.textContent = "681";
        descricao.textContent = "Dragão Draluxo é o corpo e a alma do Lendas de Deux. A energia e a amabilidade dele mantêm o grupo unido. Porém, tem uma ligeira atração por coisas brilhantes, por isso fique de olho no seu Ouro quando ele estiver por perto.";
    } else if (event.target.getAttribute("href") === "#dragao-legado") { //DÉCIMO-SEXTO ---------------------------------------
        nome.textContent = "Dragão do Legado";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/L.png";
        imgDragon.src = "img/dragao/dr16.png";
        vel.textContent = "970";
        duracao.textContent = "2 DIAS 10 HORAS";
        numero.textContent = "91";
        descricao.textContent = "Este Dragão é tão lendário que nenhuma palavra pode lhe fazer justiça. Esteja ciente: sua vida nunca mais será a mesma depois de encontrar esta criatura feita de lendas.";
    } else if (event.target.getAttribute("href") === "#dragao-terra-duplo") { //DÉCIMO-SEPTIMO ---------------------------------------
        nome.textContent = "Dragão da Terra Duplo";
        nome.style.fontSize = "1.7em"
        rareza.src = "img/raridade/V.png";
        imgDragon.src = "img/dragao/dr17.png";
        vel.textContent = "780";
        duracao.textContent = "15 SEGUNDOS";
        numero.textContent = "272";
        descricao.textContent = "Não se assuste, não é um terremoto, mas um digno Dragão da Terra Duplo! Os Dragão da Terra Duplos não são conhecidos por sua beleza, mas por seu amor à sujeira e por sua natureza extremamente humilde e honesta. Dragão da Terra Duplo é um dragão Very Rare com a tipagem primária de earth. O Dragão da Terra Duplo também pode aprender movimentos de Earth.";
    } else if (event.target.getAttribute("href") === "#dragao-elementos") { //DÉCIMO-OCTAVO ---------------------------------------
        nome.textContent = "Dragão dos Elementos";
        nome.style.fontSize = "1.7em"
        rareza.src = "img/raridade/R.png";
        imgDragon.src = "img/dragao/dr18.png";
        vel.textContent = "726";
        duracao.textContent = "01 MIN";
        numero.textContent = "237";
        descricao.textContent = "Este dragão é a própria perfeição! Seus elementos são combinados de tal forma que nenhum é mais importante que outro, obtendo um delicado equilíbrio entre todos. Dragão dos Elementos é um dragão Rare com a tipagem primária de earth. Também pode aprender movimentos Fire e Water.";
    } else if (event.target.getAttribute("href") === "#dragao-sombrio-puro") { //DÉCIMO-NOVENO ---------------------------------------
        nome.textContent = "Dragão Sombrio Puro";
        nome.style.fontSize = "1.8em"
        rareza.src = "img/raridade/E.png";
        imgDragon.src = "img/dragao/dr19.png";
        vel.textContent = "871";
        duracao.textContent = "2 DIAS 04 HORAS";
        numero.textContent = "88";
        descricao.textContent = "A escuridão agora é dobrada! Duas mentes malignas para armar alguns planos sombrios e quatro olhos observadores para enxergar ainda melhor na zona além da imaginação. O D.Sombrio Puro é um dragão Epic com a tipagem primária de pure. O mesmo também pode aprender movimentos e Dark.";
    } else if (event.target.getAttribute("href") === "#dragao-karma-graciosa") { //VIGÉSIMO ---------------------------------------
        nome.textContent = "Dragão Karma Graciosa";
        nome.style.fontSize = "1.6em"
        rareza.src = "img/raridade/M.png";
        imgDragon.src = "img/dragao/dr20.png";
        vel.textContent = "982";
        duracao.textContent = "2 DIAS";
        numero.textContent = "1632";
        descricao.textContent = "Não é fácil fazer parte da Sociedade do Karma, mas a Dragão Karma Graciosa faz isso com... bom, com graciosidade. Com vendetas pessoais contra seus inimigos Corrompidos, ela luta por mais do que somente a paz – ela quer justiça!";
    }
});