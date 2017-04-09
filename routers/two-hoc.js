import twoHoc from '@stack/twoHoc'
import Decorators from '@stack/twoHoc/Decorators'
import CoreDecorators from '@stack/twoHoc/CoreDecorators'
import HocWrapper from '@stack/twoHoc/HocWrapper'
import HocWrapperAdvance from '@stack/twoHoc/HocWrapperAdvance'
import HocExtend from '@stack/twoHoc/HocExtend'
import HocExtendAdvance from '@stack/twoHoc/HocExtendAdvance'
import HocFinal from '@stack/twoHoc/HocFinal'

export default {
  path: '/two_hoc',
  component: twoHoc,
  children: {
    ES7装饰器: {
      path: '/two_hoc/decorators',
      filepath: '/twoHoc/Decorators/index.md',
      component: Decorators,
    },
    NPM装饰器: {
      path: '/two_hoc/core_decorators',
      filepath: '/twoHoc/CoreDecorators/index.md',
      component: CoreDecorators,
    },
    HOC属性代理: {
      path: '/two_hoc/hoc_wrapper',
      filepath: '/twoHoc/HocWrapper/index.md',
      component: HocWrapper,
    },
    HOC属性代理进阶: {
      path: '/two_hoc/hoc_wrapper_advance',
      filepath: '/twoHoc/HocWrapperAdvance/index.md',
      component: HocWrapperAdvance,
    },
    HOC反向继承: {
      path: '/two_hoc/hoc_extend',
      filepath: '/twoHoc/HocExtend/index.md',
      component: HocExtend,
    },
    HOC反向继承进阶: {
      path: '/two_hoc/hoc_extend_advance',
      filepath: '/twoHoc/HocExtendAdvance/index.md',
      component: HocExtendAdvance,
    },
    HOC所有例子全解: {
      path: '/two_hoc/hoc_final',
      filepath: '/twoHoc/HocFinal/index.md',
      component: HocFinal,
    },
  },
}
