const get8response = () => {
  fetch('/magic8response')
    .then(result => result.text())
    .then((text) => {
      document.getElementById('answer').textContent = text
    })
    .catch(err => console.log(err))
}
