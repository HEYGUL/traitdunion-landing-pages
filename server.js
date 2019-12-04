var express = require('express')

var app = express()
var directory = '/' + (process.env.STATIC_DIR || 'public')
app.use(express.static(__dirname + directory))

var port = process.env.PORT || 3000;

// RedirectPermanent / https://traitdunion.beta.gouv.fr/?utm_source=oldsite
app.get('/', (req, res) => {
  res.redirect('https://traitdunion.beta.gouv.fr/?utm_source=oldsite')
})

// RedirectPermanent /candidats/ https://traitdunion.beta.gouv.fr/candidats/?utm_source=oldsite
app.get('/candidats/', (req, res) => {
  res.redirect('https://traitdunion.beta.gouv.fr/candidats/?utm_source=oldsite')
})

// RedirectPermanent /candidats/liste-pmsmp.html https://traitdunion.beta.gouv.fr/offres?utm_source=oldsite
app.get('/candidats/list-pmsmp.html', (req, res) => {
  res.redirect('https://traitdunion.beta.gouv.fr/offres?utm_source=oldsite')
})

// RedirectPermanent /entreprises/ https://traitdunion.beta.gouv.fr/entreprises?utm_source=oldsite
app.get('/entreprises/', (req, res) => {
  res.redirect('https://traitdunion.beta.gouv.fr/entreprises?utm_source=oldsite')
})

app.listen(port, function () {
  console.log('Listening on', port)
})
