// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// BOTÃO
const botao = document.querySelector('.botao');

if (botao) {
    botao.addEventListener('click', () => {
        botao.style.transform = "scale(0.95)";

        setTimeout(() => {
            botao.style.transform = "scale(1)";
        }, 150);
    });
}

// FORMULÁRIO CONTATO
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");
        const status = document.getElementById("status");

        if (!nome.value || !email.value || !mensagem.value) {
            alert("❌ Preencha todos os campos!");
            return;
        }

        status.innerHTML = "✅ Mensagem enviada com sucesso!";
        form.reset();
    });
});
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);