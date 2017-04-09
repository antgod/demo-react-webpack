import '../index.less'
import { generatorSubRouter } from '@common/router'

export default ({ routes }) => {
  return generatorSubRouter(routes, '第二章:Hoc')
}