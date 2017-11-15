const messageDiv = document.getElementById('message')

/**
 * [displayMessage description]
 * @param  {object} message - keys: "success" (boolean), "message" (string)
 * @return {undefined}
 */
function displayMessage(message) {
  const messageClass = message.success ? 'success' : 'error'
  messageDiv.className = messageClass
  messageDiv.innerHTML = message.message
}

/**
 * Send name update data via AJAX and display response message
 * @param  {object} data - contains keys "petId" and "newName"
 * @return {[type]}      [description]
 */
function updateName(data) {
  console.log('got here')
  console.log(data);
  fetch('/updateName', {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(messageStream => messageStream.json())
    .then((message) => {
      console.log('AJAX response', message)

      // choose the appropriate styling class
      displayMessage(message)
    })
    .catch((err) => {
      // Alert the user that something went wrong
      displayMessage({ success: false, message: err.toString() })
    })
}

document.getElementById('updateForm')

const updateForms = document.querySelectorAll('.updateForm')
console.log(updateForms)

/**
 * Harvest data and submit via AJAX when the animal name is changed
 * @param  {event} evt - Event that triggered the submit
 * @return {undefined}     [description]
 */
function submitForm(evt) {
  // don't actually submit the form
  evt.preventDefault()

  // the child nodes are the <input> elements
  const inputs = this.childNodes

  // build the body from the child input nodes
  const body = { }
  for (let i = 0; i < inputs.length; i += 1) {
    body[inputs[i].getAttribute('name')] = inputs[i].value
  }
  console.log(body);

  // run the AJAX and dom manipulation
  updateName(body)
}

for (let i = 0; i < updateForms.length; i += 1) {
  updateForms[i].addEventListener('submit', submitForm)
}
