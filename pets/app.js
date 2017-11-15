const express = require('express')
const bodyParser = require('body-parser');

const { getPetsAndSpecies, updatePetName } = require('./db/db.js')
const jsonParser = require('body-parser').json;


const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))
app.set('view engine', 'pug')
app.use(jsonParser());

app.get('/', (req, res) => {
  getPetsAndSpecies()
    .then((pets) => {
      // console.log(pets);
      res.render(
        'pets',
        { pets }
      )
    })
    .catch(console.error)
})

app.put('/updateName', (req,res) => {
  console.log(req.body);
  updatePetName(req.body.petId, req.body.name)
    .then((message) => {
      console.log(message);
      // res.json({message: message})
    })
})
app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)
