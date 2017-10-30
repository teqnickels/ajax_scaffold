const express = require('express')

const app = express()
const predictions = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
]

const getRandomAnswer = () => predictions[Math.floor(Math.random() * predictions.length)]

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Magic 8 ball</title>
    </head>
    <body>
      <h1>Magic 8 ball</h1>
      <form>
        <textarea rows=4 cols=50 placeholder="type yes/no question here"></textarea></br>
        <input type='submit'>
      </form>
      <div id='answer'></div>
      <script src='magic8.js'></script>
    </body>`)
})

app.get('/magic8response', (req, res) => {
  const randomAnswer = getRandomAnswer()
  res.send(randomAnswer)
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
