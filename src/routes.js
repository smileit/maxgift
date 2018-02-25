import Home from './pages/home'
import Detail from './pages/detail'
const routes = [
  {
    Cmp: Home,
    name: 'home',
    path: '/'
  },
  {
    Cmp: Detail,
    name: 'detail',
    path: '/detail/:id?'
  }
]
export default routes
