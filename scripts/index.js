window.addEventListener('load', () => {
  const character = document.getElementById('character')
  const container = document.getElementById('char-container')
  character.addEventListener('click', () => {
    character.play()
    container.classList.add('animated')
    container.classList.add('tada')
    setTimeout(() => {
      container.classList.remove('animated')
      container.classList.remove('tada')
    }, 1000)
  })

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
  }
})
