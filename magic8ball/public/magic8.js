const get8response = () => {
  console.log('got here')
  fetch('/magic8response')
    .then(result => result.text())
    .then((text) => {
      document.getElementById('answer').textContent = text
    })
    .catch(err => console.log(err))
}

document.getElementById('question-form')
  .addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log('hiya')
    get8response()
  })
