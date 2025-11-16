(function () {
  const scroller = document.getElementById('servicosScroll');
  const btnNext = document.querySelector('.carousel-btn.next');
  const btnPrev = document.querySelector('.carousel-btn.prev');

  // 👉 Distância para rolar (80% da largura visível)
  function getScrollAmount() {
    return Math.round(scroller.clientWidth * 0.8);
  }

  // 👉 Botões
  btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    scroller.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    scroller.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  // 👉 Drag manual sem bloquear nada
  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  scroller.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scroller.offsetLeft;
    startScrollLeft = scroller.scrollLeft;
  });

  scroller.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  scroller.addEventListener('mouseup', () => {
    isDragging = false;
  });

  scroller.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - scroller.offsetLeft;
    const walk = (startX - x) * 1.3; // velocidade do arraste
    scroller.scrollLeft = startScrollLeft + walk;
  });

  // 👉 Permite arraste também no mobile (touch)
  scroller.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startScrollLeft = scroller.scrollLeft;
  });

  scroller.addEventListener('touchmove', (e) => {
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 1.3;
    scroller.scrollLeft = startScrollLeft + walk;
  });
})();
