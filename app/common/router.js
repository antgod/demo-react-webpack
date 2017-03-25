import Home from '../home'
import ReverseMode from '../stack/ReverseMode'
import CustomProps from '../stack/CustomProps'
import HighLevelFunction from '../stack/HighLevelFunction'
import Decorators from '../stack/Decorators'
import HighLevelComponent from '../stack/HighLevelComponent'
import HighLevelComponentWrapper from '../stack/HighLevelComponent/HighLevelComponentWrapper'
import AbstractState from '../stack/HighLevelComponent/AbstractState'
import CoreDecorators from '../stack/HighLevelComponent/CoreDecorators'
import ReverseExtend from '../stack/HighLevelComponent/ReverseExtend'
import ComponentProps from '../stack/ComponentProps'
import LifeCycle from '../stack/LifeCycle'
import MixEvent from '../stack/MixEvent'
import ReactDOM from '../stack/ReactDOM'
import Tabs from '../stack/component/Tabs'
import ComposeEvent from '../stack/ComposeEvent'
import ClassName from  '../stack/Style/ClassName'
import CssModules from  '../stack/Style/CssModules'

const router = {
  '/': Home,
  '/reverse_mode': ReverseMode,
  '/custom_props': CustomProps,
  '/highlevel_function': HighLevelFunction,
  '/decorators': Decorators,
  '/highlevel_component': HighLevelComponent,
  '/highLevel_component_wrapper': HighLevelComponentWrapper,
  '/abstract_state': AbstractState,
  '/component_props': ComponentProps,
  '/core_decorators': CoreDecorators,
  '/reverse_extend': ReverseExtend,
  '/life_cycle': LifeCycle,
  '/tabs': Tabs,
  '/mix_event': MixEvent,
  '/react_dom': ReactDOM,
  '/compose_event': ComposeEvent,
  '/classname': ClassName,
  '/css_modules': CssModules,
};

export default router