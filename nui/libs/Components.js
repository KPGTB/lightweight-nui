const registerComponent = (name) => {
    getComponentHTML(name).then(html => {
        customElements.define(`fivem-${name}`, class extends HTMLElement {
            connectedCallback() {
                this.innerHTML = html
            }
        })
    })
}

const getComponentHTML = async (name) => {
    const res = await fetch(`./components/${name}.html`)
    const text = await res.text()
    return text
}