import './index.less'
import ReactDOM from 'react-dom'
import routers from '@app/routers'
import produceRouter from '@common/router'

ReactDOM.render(produceRouter(routers), document.getElementById('app'))
