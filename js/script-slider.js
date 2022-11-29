const allItens = document.querySelectorAll('.item');
const itens = document.querySelector('.itens');
const body = document.querySelector('body');

itens.onclick = (e) => {
  if (e) {
    allItens.forEach((item) => {
      item.style.pointerEvents = 'painted';
    });
  }
};

itens.onmousemove = (event) => {
  if (event.buttons) {
    event.preventDefault();
    itens.style.cursor = 'move';
    if(body.clientWidth > 1320){
       allItens.forEach((item) => {
        item.style.pointerEvents = 'none';
      });
    }
    if (event.movementX < 0) {
      event.target.scrollBy(30, 0);
    } else if (event.movementX > 0) {
      event.target.scrollBy(-30, 0);
    }
  }
};

itens.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (event) {
    allItens.forEach((item) => {
      item.style.pointerEvents = 'none';
    });
    if (event.deltaY > 0) {
      event.target.scrollBy(150, 0);
    } else if (event.deltaY < 0) {
      event.target.scrollBy(-150, 0);
    }
  }
});