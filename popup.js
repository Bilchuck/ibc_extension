const p = document.querySelector('p')
fetch(`https://ibc.ua/`, {
  mode: 'no-cors'
})
  .then(r => {
    return r.text()
  })
  .then(t => {
    p.innerText = t
  })
