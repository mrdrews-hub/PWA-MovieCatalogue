import favoriteMovieDB from '../../data/favoritemovie-idb'
import { createMovieItemTemplate } from '../templates/template-creator'

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Liked Movies</h2>
        <div id="movies" class="movies"></div>
      </div>
    `
  },

  async afterRender() {
    const movies = await favoriteMovieDB.getAllMovie()
    const moviesContainer = document.querySelector('#movies')
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie)
    })
  }
}

export default Like