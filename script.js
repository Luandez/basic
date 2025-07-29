// meu código estruturado js - tenho coisas a melhorar ainda
function enviarWhatsApp() {
  const servicosSelecionados = [];
  document.querySelectorAll('.card.selecionado').forEach((card) => {
    const servico = card.querySelector('h3').textContent;
    servicosSelecionados.push(servico);
  });

  if (servicosSelecionados.length === 0) {
    alert("Por favor, selecione ao menos um serviço.");
    return;
  }

  const mensagem = `Olá, gostaria dos seguintes serviços: ${servicosSelecionados.join(", ")}`;
  const telefone = "5567999217120";
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

// Seleção de serviços
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selecionado');
  });
});

// Animação de entrada em sequência (stagger)
const fadeElements = document.querySelectorAll('.fade-in');

fadeElements.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add('show');
  }, index * 200); // atraso progressivo
});

// --- NOVO: Alterar cabeçalho ao rolar ---
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});