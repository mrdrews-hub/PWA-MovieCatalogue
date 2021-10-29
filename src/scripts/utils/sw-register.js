import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const swResgister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register()
    return
  }
  console.log('Browser doesnt support service worker')
}

export default swResgister