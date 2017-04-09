import Home from '@page/home'

import one from './one'
import two from './two'
import twoHoc from './two-hoc'

const home = {
  path: '/home',
  component: Home,
}

const Routers = {
  home,
  one,
  two,
  two_高阶组件: twoHoc,
}

export default Routers
