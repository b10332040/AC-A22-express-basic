// Include Express ////////////////////////////////
const express = require('express')
const app = express()

// Setting Template Engine ///////////////////////
const exhbs = require('express-handlebars')
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Setting static files //////////////////////////
app.use(express.static('public'))

// Setting Route /////////////////////////////////
app.get('/', (req, res) => {
  res.render('index', {page: 'home'})
})
app.get('/about', (req, res) => {
  res.render('about', {page: 'about'})
})
app.get('/profile', (req, res) => {
  res.render('profile', {page: 'profile'})
})
app.get('/content', (req, res) => {
  res.render('content', {page: 'content'})
})

// Listen and start the server ///////////////////
const port = 3000
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})