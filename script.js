const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

const chavesProibidas = ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

window.addEventListener("keydown", function(e) {
    if (chavesProibidas.indexOf(e.code) > -1) {
        if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault();
        }
    }
}, { passive: false });

const focarJogo = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.focus();
    }
};

window.addEventListener('load', focarJogo);
document.addEventListener('click', focarJogo);