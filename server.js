const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const directory = '/' + (process.env.STATIC_DIR || 'public')
app.use(express.static(__dirname + directory))

// RedirectPermanent / https://traitdunion.beta.gouv.fr/?utm_source=oldsite
app.get('/', (req, res) => {
  res.redirect(301, 'https://traitdunion.beta.gouv.fr/?utm_source=oldsite')
})

// RedirectPermanent /candidats/ https://traitdunion.beta.gouv.fr/candidats/?utm_source=oldsite
app.get('/candidats/', (req, res) => {
  res.redirect(301, 'https://traitdunion.beta.gouv.fr/candidats/?utm_source=oldsite')
})

// RedirectPermanent /candidats/liste-pmsmp.html https://traitdunion.beta.gouv.fr/offres?utm_source=oldsite
app.get('/candidats/list-pmsmp.html', (req, res) => {
  res.redirect(301, 'https://traitdunion.beta.gouv.fr/offres?utm_source=oldsite')
})

// RedirectPermanent /entreprises/ https://traitdunion.beta.gouv.fr/entreprises?utm_source=oldsite
app.get('/entreprises/', (req, res) => {
  res.redirect(301, 'https://traitdunion.beta.gouv.fr/entreprises?utm_source=oldsite')
})

app.use((req, res, next) => {
  if (req.url.indexOf('/candidats/images/') === -1) {
    return res.redirect(301, 'https://traitdunion.beta.gouv.fr/?utm_source=oldsite')
  }
  next()
})

app.listen(port, function () {
  console.log('Listening on', port)
})
