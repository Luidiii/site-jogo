// menu para cell
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// variaveis do jogo
const nomeJogo = "Aventura no Campo";
const anoLancamento = 2026;
const personagem = "Explorador";
const dificuldade = "Média";
const objetivo = "Chegar ao final do mapa";

// 5 variaveis no site
const info = document.getElementById("info-jogo");

if (info) {
    info.innerText =
    "Jogo: " + nomeJogo + "\n" +
    "Ano: " + anoLancamento + "\n" +
    "Personagem: " + personagem + "\n" +
    "Dificuldade: " + dificuldade + "\n" +
    "Objetivo: " + objetivo;
}

// bloqueio das setas no site para o jogo
const teclasBloqueadas = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"];

window.addEventListener("keydown", function(e) {
    if (teclasBloqueadas.includes(e.code)) {
        const tag = document.activeElement.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA") {
            e.preventDefault();
        }
    }
}, { passive: false });

// prompt q pergunta a idade
window.addEventListener("load", () => {

    let idade = localStorage.getItem("idadeUsuario");

    if (!idade) {
        idade = prompt("Qual sua idade?");
        localStorage.setItem("idadeUsuario", idade);
    }

    if (idade >= 12) {
        liberarConteudo();

        if (!localStorage.getItem("alertaLiberado")) {
            alert("Acesso liberado!");
            localStorage.setItem("alertaLiberado", "true");
        }

    } else {
        if (!localStorage.getItem("alertaNegado")) {
            alert("Acesso negado!");
            localStorage.setItem("alertaNegado", "true");
        }
    }

    verificarLancamento();
});
// blur
const jogo = document.querySelector("iframe");

if (jogo) {
    jogo.style.filter = "blur(8px)";
}

function liberarConteudo() {
    if (jogo) {
        jogo.style.filter = "none";
    }
}

// formulario
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const status = document.getElementById("status");

        if (status) {
            status.innerText = "Obrigado pela mensagem, " + nome + "!";
        }
    });
}

// tema escuro ou claro
const botaoTema = document.createElement("button");
botaoTema.innerText = "Tema Escuro";
botaoTema.style.position = "fixed";
botaoTema.style.top = "10px";
botaoTema.style.right = "10px";
botaoTema.style.padding = "10px";
botaoTema.style.cursor = "pointer";

document.body.appendChild(botaoTema);

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botaoTema.innerText = "Tema Claro";
    } else {
        botaoTema.innerText = "Tema Escuro";
    }
});

// verificar lançamento
function verificarLancamento() {
    const anoAtual = new Date().getFullYear();

    if (anoAtual === anoLancamento && !localStorage.getItem("lancamentoMostrado")) {
        alert("🎉 Grande lançamento do jogo!");
        localStorage.setItem("lancamentoMostrado", "true");
    }
}

const resetBtn = document.createElement("button");
resetBtn.innerText = "Resetar Sistema";
resetBtn.style.position = "fixed";
resetBtn.style.bottom = "10px";
resetBtn.style.right = "10px";
resetBtn.style.padding = "10px";
resetBtn.style.cursor = "pointer";

document.body.appendChild(resetBtn);

resetBtn.addEventListener("click", () => {
    localStorage.clear();
    alert("Sistema resetado! Recarregue a página.");
});

function saudar() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem");

    if (nome.trim() === "") {
        mensagem.textContent = "Digite seu nome!";
    } else {
        mensagem.textContent = `Bem-vindo(a), ${nome}! Boa aventura no campo 🌾`;
    }
}