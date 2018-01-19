const Mayuri = function(window, el) {
  const player = el.querySelector('#player')

  function start() {
    player.play()
    el.classList.add('animated')
    el.classList.add('tada')
    window.setTimeout(stop, 1000)
  }

  function stop() {
    el.classList.remove('animated')
    el.classList.remove('tada')
  }

  el.addEventListener('click', start)
}

window.addEventListener('load', () => {
  const mayuri = new Mayuri(window, document.getElementById('mayuri'))

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('scripts/sw.js')
  }
})
