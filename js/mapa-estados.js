const button = document.querySelectorAll('.button-group > button');

const removeStyles = () => {
  for (let i = 0; i < button.length; i++) {
    document
      .querySelectorAll('.button-group > button')
      [i].removeAttribute('class');
  }
};

const addNewMap = (id) => {
  document.querySelector('#img-map').removeAttribute('class');
  document.querySelector('.container-map > #img-map').setAttribute('class', id);
};

button.forEach((key) => {
  key.addEventListener('mouseover', (e) => {
    removeStyles();
    e.target.setAttribute('class', 'buttonClicked');
    addNewMap(e.target.id);
  });
});