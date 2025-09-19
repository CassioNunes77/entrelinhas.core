// JavaScript básico para o Entrelinhas
console.log('Entrelinhas carregado com sucesso!');

// Adicionar animação suave ao carregar
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 100);
  }
  
  // Adicionar efeito de hover nos cards
  const features = document.querySelectorAll('.feature');
  features.forEach(feature => {
    feature.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    feature.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
