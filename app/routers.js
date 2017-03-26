import Home from '@page/home'
import One from '@stack/one'
import Props from '@stack/one/Props'
import ChildComponent from '@stack/one/ChildComponent'
import InnerHTML from '@stack/one/InnerHTML'
import LifeCycle from '@stack/one/LifeCycle'
import ReactDOM from '@stack/one/ReactDOM'

const Routers = {
  home: {
    path: '/home',
    Component: Home,
  },
  one: {
    path: '/one',
    Component: One,
    children: {
      子组件: {
        path: '/one/child_component',
        filepath: '/one/ChildComponent/index.md',
        Component: ChildComponent,
      },
      组件属性: {
        path: '/one/props',
        filepath: '/one/Props/index.md',
        Component: Props,
      },
      HTML转义: {
        path: '/one/inner_html',
        filepath: '/one/InnerHTML/index.md',
        Component: InnerHTML,
      },
      生命周期: {
        path: '/one/lift_cycle',
        filepath: '/one/LifeCycle/index.md',
        Component: LifeCycle,
      },
      DOM操作: {
        path: '/one/react_dom',
        filepath: '/one/ReactDOM/index.md',
        Component: ReactDOM,
      },
    },
  },
}

export default Routers
