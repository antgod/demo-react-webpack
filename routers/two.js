import Two from '@stack/two'
import ComposeEvent from '@stack/two/ComposeEvent'
import MixEvent from '@stack/two/MixEvent'
import ClassName from '@stack/two/Style/ClassName'
import CssModules from '@stack/two/Style/CssModules'
import ChildrenToParent from '@stack/two/ChildrenToParent'
import Crosscomponent from '@stack/two/Crosscomponent'
import NoRelcomponent from '@stack/two/NoRelcomponent'
import Selectcomponent from '@stack/two/Selectcomponent'
import PureFunction from '@stack/two/PureFunction'
import PureRender from '@stack/two/PureRender'
import PureRenderMixin from '@stack/two/PureRenderMixin'
import PureRenderOptimize from '@stack/two/PureRenderOptimize'
import Keys from '@stack/two/Keys'
import Perf from '@stack/two/Perf'
import Tab from '@stack/two/Tab'

export default {
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
    Tab优化: {
      path: '/two/tab',
      filepath: '/two/Tab/index.md',
      component: Tab,
    },
  },
}
