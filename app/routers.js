import Home from '@page/home'

import One from '@stack/one'
import Props from '@stack/one/Props'
import Childcomponent from '@stack/one/Childcomponent'
import InnerHTML from '@stack/one/InnerHTML'
import LifeCycle from '@stack/one/LifeCycle'
import ReactDOM from '@stack/one/ReactDOM'

import Two from '@stack/two'
import ComposeEvent from '@stack/two/ComposeEvent'
import MixEvent from '@stack/two/MixEvent'
import ClassName from '@stack/two/Style/ClassName'
import CssModules from '@stack/two/Style/CssModules'
import ChildrenToParent from '@stack/two/ChildrenToParent'
import Crosscomponent from '@stack/two/Crosscomponent'
import NoRelcomponent from '@stack/two/NoRelcomponent'
import Decorators from '@stack/two/Decorators'
import CoreDecorators from '@stack/two/CoreDecorators'
import HocWrapper from '@stack/two/HocWrapper'
import HocWrapperAdvance from '@stack/two/HocWrapperAdvance'
import HocExtend from '@stack/two/HocExtend'
import HocExtendAdvance from '@stack/two/HocExtendAdvance'
import Selectcomponent from '@stack/two/Selectcomponent'
import PureFunction from '@stack/two/PureFunction'
import PureRender from '@stack/two/PureRender'
import PureRenderMixin from '@stack/two/PureRenderMixin'
import PureRenderOptimize from '@stack/two/PureRenderOptimize'
import Keys from '@stack/two/Keys'
import Perf from '@stack/two/Perf'

const Routers = {
  home: {
    path: '/home',
    component: Home,
  },
  one: {
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
    },
  },
  two: {
    path: '/two',
    component: Two,
    children: {
      事件绑定: {
        path: '/two/compose_event',
        filepath: '/two/ComposeEvent/index.md',
        component: ComposeEvent,
      },
      混合事件: {
        path: '/two/mix_event',
        filepath: '/two/MixEvent/index.md',
        component: MixEvent,
      },
      类处理: {
        path: '/two/style/classname',
        filepath: '/two/Style/classname.md',
        component: ClassName,
      },
      类模块: {
        path: '/two/style/css_modules',
        filepath: '/two/Style/css_modules.md',
        component: CssModules,
      },
      子父通信: {
        path: '/two/children_parent',
        filepath: '/two/ChildrenToParent/index.md',
        component: ChildrenToParent,
      },
      跨组件通信: {
        path: '/two/cross_component',
        filepath: '/two/CrossComponent/index.md',
        component: Crosscomponent,
      },
      无关联组件通信: {
        path: '/two/no_rel_component',
        filepath: '/two/NoRelComponent/index.md',
        component: NoRelcomponent,
      },
      ES7装饰器: {
        path: '/two/decorators',
        filepath: '/two/Decorators/index.md',
        component: Decorators,
      },
      NPM装饰器: {
        path: '/two/core_decorators',
        filepath: '/two/CoreDecorators/index.md',
        component: CoreDecorators,
      },
      HOC属性代理: {
        path: '/two/hoc_wrapper',
        filepath: '/two/HocWrapper/index.md',
        component: HocWrapper,
      },
      HOC属性代理进阶: {
        path: '/two/hoc_wrapper_advance',
        filepath: '/two/HocWrapperAdvance/index.md',
        component: HocWrapperAdvance,
      },
      HOC反向继承: {
        path: '/two/hoc_extend',
        filepath: '/two/HocExtend/index.md',
        component: HocExtend,
      },
      HOC反向继承进阶: {
        path: '/two/hoc_extend_advance',
        filepath: '/two/HocExtendAdvance/index.md',
        component: HocExtendAdvance,
      },
      Select组件: {
        path: '/two/select_component',
        filepath: '/two/SelectComponent/index.md',
        component: Selectcomponent,
      },
      纯函数: {
        path: '/two/pure_function',
        filepath: '/two/PureFunction/index.md',
        component: PureFunction,
      },
      纯渲染_深对比: {
        path: '/two/pure_render',
        filepath: '/two/PureRender/index.md',
        component: PureRender,
      },
      纯渲染插件_潜对比: {
        path: '/two/pure_render_mixin',
        filepath: '/two/PureRenderMixin/index.md',
        component: PureRenderMixin,
      },
      纯渲染插件_优化: {
        path: '/two/pure_render_optimize',
        filepath: '/two/PureRenderOptimize/index.md',
        component: PureRenderOptimize,
      },
      Keys: {
        path: '/two/keys',
        filepath: '/two/Keys/index.md',
        component: Keys,
      },
      性能检测: {
        path: '/two/perf',
        filepath: '/two/Perf/index.md',
        component: Perf,
      },
    },
  },
}

export default Routers
