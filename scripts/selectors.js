
const btn = document.querySelector('.btn');
const columns = document.querySelectorAll('.senses .row__col');

function handleBtnClick () {
  console.log(columns);
  // columns.remove();
  columns.forEach(function (elem, index) {
    elem.remove();
  });
}
btn.addEventListener('click', handleBtnClick);


const interTitle = document.querySelector('.interaction h1');
const interBtns = document.querySelectorAll('.interaction .btn');

interBtns[0].addEventListener('click', function() {
  // interTitle.style.color = 'blue';
  interTitle.classList.add('interaction__title--blue');
});