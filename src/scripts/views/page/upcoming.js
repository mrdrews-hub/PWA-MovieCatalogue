const Upcoming = {
  async render () {
    return `
      <h2>Upcoming Page</h2>`
  },

  async afterRender () {
    console.log('After Render')
  }
}
export default Upcoming
