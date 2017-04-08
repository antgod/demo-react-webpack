import One from '@stack/one'
import Props from '@stack/one/Props'
import Childcomponent from '@stack/one/Childcomponent'
import InnerHTML from '@stack/one/InnerHTML'
import LifeCycle from '@stack/one/LifeCycle'
import ReactDOM from '@stack/one/ReactDOM'
import Tab from '@stack/one/Tab'

export default {
  path: '/one',
  component: One,
  children: {
    子组件: {
      path: '/one/child_component',
      filepath: '/one/ChildComponent/index.md',
      component: Childcomponent,
    },
    组件属性: {
      path: '/one/props',
      filepath: '/one/Props/index.md',
      component: Props,
    },
    HTML转义: {
      path: '/one/inner_html',
      filepath: '/one/InnerHTML/index.md',
      component: InnerHTML,
    },
    生命周期: {
      path: '/one/lift_cycle',
      filepath: '/one/LifeCycle/index.md',
      component: LifeCycle,
    },
    DOM操作: {
      path: '/one/react_dom',
      filepath: '/one/ReactDOM/index.md',
      component: ReactDOM,
    },
    Tab: {
      path: '/one/tab',
      filepath: '/one/Tab/index.md',
      component: Tab,
    },
  },
}
