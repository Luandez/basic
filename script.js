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

// Seleção de serviços (toggle da classe .selecionado)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selecionado');
  });
});

// Animação de entrada em sequência (fade-in stagger)
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add('show');
  }, index * 200);
});

// Efeito do cabeçalho que diminui ao rolar (desktop apenas)
if (window.innerWidth > 600) {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}