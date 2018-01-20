const Character = function(el) {
  const player = el.querySelector('#player')

  function start() {
    player.play()
    el.classList.add('animated')
    el.classList.add('tada')
    setTimeout(stop, 1000)
  }

  function stop() {
    el.classList.remove('animated')
    el.classList.remove('tada')
  }

  el.addEventListener('click', start)
}

window.addEventListener('load', () => {
  const character = new Character(document.getElementById('character'))

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
  }
})
