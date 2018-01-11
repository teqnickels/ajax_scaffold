console.log('script.js is running')

const inputArray = document.querySelectorAll('.pet-name')
inputArray.forEach((input) => {
  input.addEventListener('keypress', (e) => {
    const key = e.keyCode
    if (key === 13) {
      console.log('submitted')
      // const pet = {
      //   id : e.target.getAttribute('data-petid'), 
      //   name : e.target.value
      // }
      const petId = e.target.getAttribute('data-petid')
      const petName = e.target.value
      console.log(petName)
      console.log(JSON.stringify(petName))
      console.log(petId)
      const url = `/pets/${petId}/update_name`
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ petName }),
      })
        .then(response => response.json())
        .then((message) => {
          document.getElementById('message').innerHTML = message.message
        })
    }
  })
})

