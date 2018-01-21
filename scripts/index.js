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

  const previous = document.getElementById('previous')
  const next = document.getElementById('next')
  previous.addEventListener('click', () => {
    character.setAttribute('image', 'images/nico.png')
    character.setAttribute('sound', 'sounds/nico.mp3')
  })
  next.addEventListener('click', () => {
    character.setAttribute('image', 'images/mayuri.png')
    character.setAttribute('sound', 'sounds/mayuri.mp3')
  })

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
  }
})
