// variáveis
const btnTry = document.querySelector('.fortune')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const message = document.querySelector('.message')


const frases = [
  'Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'O riso é a menor distância entre duas pessoas.',
  'Deixe de lado as preocupações e seja feliz.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.'
]

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', toggleScreen)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen()
  }
})

// função callback
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão
  let number = Math.round(Math.random() * 7).toFixed(0)
  message.innerHTML = frases[number]
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
