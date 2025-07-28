function enviarWhatsApp() {
  const servicosSelecionados = [];
  document.querySelectorAll('.card').forEach((card, index) => {
    // Usando uma classe "selecionado" para identificar as caixas clicadas
    if (card.classList.contains('selecionado')) {
      const servico = card.querySelector('h3').textContent;
      servicosSelecionados.push(servico);
    }
  });

  if (servicosSelecionados.length === 0) {
    alert("Por favor, selecione ao menos um serviço.");
    return;
  }

  const mensagem = `Olá, gostaria dos seguintes serviços: ${servicosSelecionados.join(", ")}`;
  const telefone = "5567999217120"; //número com código do país e DDD
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selecionado');
  });
});