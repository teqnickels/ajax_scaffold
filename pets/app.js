const express = require('express')
const { getPetsAndSpecies, updatePetName } = require('./db/db.js')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  getPetsAndSpecies()
    .then((pets) => {
      res.render(
        'pets',
        { pets }
      )
    })
    .catch(console.error)
})

app.put('/pets/:petId/update_name', (req, res) => {
  const { petId } = req.params
  const { petName } = req.body

  console.log('WHATS THE NEW NAME?', petName)
  console.log('BODY', req.body)

  updatePetName(Number(petId), petName)
    .then(response => res.json(response)).catch(console.error)
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)
