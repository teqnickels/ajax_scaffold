const getUpdateMessage = (data) => {
  console.log('got here')
  console.log(data);
  fetch('/updateName', {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((message) =>{
    console.log(message);
  })
}

document.getElementById('updateForm')
  .addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log('hiya')
    let body = { petID: document.getElementById('petID').value, name: document.getElementById('name').value }
    console.log(body);
    getUpdateMessage(body)
  })

  //
  // fetch('/api/update', {
  //     method: 'put',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
