var buttons = document.querySelectorAll("button");
var form = document.querySelector('#form');
var background = document.querySelector('#background');
console.log(buttons);

function formActive() {
  form.classList.remove('hidden');
  form.classList.add('formActive');
  background.classList.remove('hidden');
}

for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener('click', formActive)
};
