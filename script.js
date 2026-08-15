function atualizarDataDaOferta() {
  const campo = document.querySelector('.offer-ribbon strong');
  if (!campo) return;
  campo.textContent = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: 'long'
  }).format(new Date()).toUpperCase();
}

document.addEventListener('DOMContentLoaded', atualizarDataDaOferta);
setInterval(atualizarDataDaOferta, 60000);
