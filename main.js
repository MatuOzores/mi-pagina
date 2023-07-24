const btnSwitch = document.querySelector('#switch');
const h1Element = document.querySelector('h1');
const sectionElement = document.querySelector('.inicio');

btnSwitch.addEventListener('click', () => {
  btnSwitch.classList.toggle('active');
  h1Element.classList.toggle('dark');
  sectionElement.classList.remove('inicio'); 
  sectionElement.classList.toggle('dark');
});