const app = require('express')()
const port = process.env.PORT || 3030

app.get('/', async (req, res) => {
  res.send('Welcome to vercel hosted node app')
})

app.get('/users', async (req, res) => {
  res.send([{
    "name": "Shivam Pandey",
    "loc": "Uttar Pradesh"
  },{
    "name": "Satyam Pandey",
    "loc": "Uttar Pradesh"
  }])
})

app.get('random', aysnc (req,res) => {
  res.send('Hello I am random page')
})

app.listen(port, (err) => {
  if (err) {
    console.log('app failed to load')
  }
})

module.exports = app