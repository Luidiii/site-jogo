// MENU MOBILE (hambúrguer)
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// FECHAR MENU AO CLICAR EM UM LINK (mobile)
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// EFEITO NO BOTÃO (clique)
const botao = document.querySelector('.botao');

if (botao) {
  botao.addEventListener('click', () => {
    botao.style.transform = "scale(0.95)";
    
    setTimeout(() => {
      botao.style.transform = "scale(1)";
    }, 150);
  });
}

// ALERTA AO ENVIAR FORMULÁRIO
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // impede envio real
    
    alert("Mensagem enviada com sucesso! ✅");
    
    form.reset(); // limpa os campos
  });
}