const spa = document.querySelector('#spa')

document.addEventListener('click', e => {
    if (e.target.getAttribute('data-spa') !== 'true') return
    const destination = e.target.getAttribute('data-to')
    spa.style.opacity = 0
    nav(destination)
    spa.style.opacity = 1
    history.pushState(null, "", destination)
})

window.addEventListener('popstate', () => {
    nav(location.href)
})

async function nav(d) {
    const res = await fetch(d)
    const text = await res.text()
    let parser = new DOMParser()
	let doc = parser.parseFromString(text, 'text/html')
    spa.innerHTML = doc.querySelector('#spa').innerHTML
}