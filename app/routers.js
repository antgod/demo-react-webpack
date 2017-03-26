import Home from '@page/home'

import One from '@stack/one'
import Props from '@stack/one/Props'
import ChildComponent from '@stack/one/ChildComponent'
import InnerHTML from '@stack/one/InnerHTML'
import LifeCycle from '@stack/one/LifeCycle'
import ReactDOM from '@stack/one/ReactDOM'

import Two from '@stack/two'
import ComposeEvent from '@stack/two/ComposeEvent'
import MixEvent from '@stack/two/MixEvent'
import ClassName from '@stack/two/Style/ClassName'
import CssModules from '@stack/two/Style/CssModules'
import ChildrenToParent from '@stack/two/ChildrenToParent'
import CrossComponent from '@stack/two/CrossComponent'
import NoRelComponent from '@stack/two/NoRelComponent'
import Decorators from '@stack/two/Decorators'
import CoreDecorators from '@stack/two/CoreDecorators'
import HocWrapper from '@stack/two/HocWrapper'
import HocWrapperAdvance from '@stack/two/HocWrapperAdvance'
import HocExtend from '@stack/two/HocExtend'
import HocExtendAdvance from '@stack/two/HocExtendAdvance'

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
  two: {
    path: '/two',
    Component: Two,
    children: {
      事件绑定: {
        path: '/two/compose_event',
        filepath: '/two/ComposeEvent/index.md',
        Component: ComposeEvent,
      },
      混合事件: {
        path: '/two/mix_event',
        filepath: '/two/MixEvent/index.md',
        Component: MixEvent,
      },
      类处理: {
        path: '/two/style/classname',
        filepath: '/two/Style/classname.md',
        Component: ClassName,
      },
      类模块: {
        path: '/two/style/css_modules',
        filepath: '/two/Style/css_modules.md',
        Component: CssModules,
      },
      子父通信: {
        path: '/two/children_parent',
        filepath: '/two/ChildrenToParent/index.md',
        Component: ChildrenToParent,
      },
      跨组件通信: {
        path: '/two/cross_component',
        filepath: '/two/CrossComponent/index.md',
        Component: CrossComponent,
      },
      无关联组件通信: {
        path: '/two/norel_component',
        filepath: '/two/NoRelComponent/index.md',
        Component: NoRelComponent,
      },
      ES7装饰器: {
        path: '/two/decorators',
        filepath: '/two/Decorators/index.md',
        Component: Decorators,
      },
      NPM装饰器: {
        path: '/two/core_decorators',
        filepath: '/two/CoreDecorators/index.md',
        Component: CoreDecorators,
      },
      HOC属性代理: {
        path: '/two/hoc_wrapper',
        filepath: '/two/HocWrapper/index.md',
        Component: HocWrapper,
      },
      HOC属性代理进阶: {
        path: '/two/hoc_wrapper_advance',
        filepath: '/two/HocWrapperAdvance/index.md',
        Component: HocWrapperAdvance,
      },
      HOC反向继承: {
        path: '/two/hoc_extend',
        filepath: '/two/HocExtend/index.md',
        Component: HocExtend,
      },
      HOC反向继承进阶: {
        path: '/two/hoc_extend_advance',
        filepath: '/two/HocExtendAdvance/index.md',
        Component: HocExtendAdvance,
      },
    },
  },
}

export default Routers
