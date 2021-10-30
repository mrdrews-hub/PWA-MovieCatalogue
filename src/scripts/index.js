import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'
import swResgister from './utils/sw-register'
import WebSocketInitiator from './utils/webscoket-initiator'
import CONFIG from './global/config'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swResgister()
  WebSocketInitiator.init(CONFIG.WEBSOCKET_SERVER)
})
