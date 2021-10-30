import NowPlaying from '../views/page/now-playing'
import Upcoming from '../views/page/upcoming'
import Detail from '../views/page/detail'
import Like from '../views/page/like'

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/like': Like,
  '/detail/:id': Detail
}
export default routes
