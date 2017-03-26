import './index.less'
import ReactDOM from 'react-dom'
import routers from '@app/routers'
import produceHomeRouter from '@common/router'

ReactDOM.render(produceHomeRouter(routers), document.getElementById('app'))
