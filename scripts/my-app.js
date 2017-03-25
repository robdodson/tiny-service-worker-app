class MyApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Hello World</h1>
      <p>This is my app</p>
      <img src="/images/corgi.jpg">
    `.trim();
  }
}

customElements.define('my-app', MyApp);