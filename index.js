const body = document.body

const h1 = document.createElement('h1')
h1.innerHTML = 'My HTML adventure'
body.appendChild(h1);

let p = document.createElement('p')
p.innerHTML = '<strong></strong><em></em><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">'
body.appendChild(p);

let table = document.createElement('table')
body.appendChild(table)