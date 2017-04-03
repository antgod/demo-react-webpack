import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { map } from '@common/utils'

const BG_STYLE = { background: '#fffeea' }

const createLinks = routers => map(routers, ({ path }, name, index) =>
  <li key={index}><Link to={path}>{name}</Link></li>
)

const SubComponentWrapper = ({ component: Component, filepath, style }) => {
  return (<div className="sub-main">
    <div>
      <div className="sub-main-title">效果:</div>
      <Component />
    </div>
    <div>
      <div className="sub-main-title">说明以及源文件:</div>
      <div style={style}>
        <ReactMarkdown source={require(`../stack${filepath}`)}/>
      </div>
    </div>
  </div>)
}

const SubRoute = ({ routes }) => {
  return (<div>
    {map(routes, ({ component, path, filepath }, name, index) => {
      const props = {
        component,
        filepath,
        style: BG_STYLE,
      }

      return <Route path={path} component={() => <SubComponentWrapper {...props} />} key={index}/>
    })}
  </div>)
}

export const generatorSubRouter = (subRouters, title) => {
  return (
    <div>
      <ul className="navigator">
        <li>{title}</li>
        {createLinks(subRouters)}
      </ul>
      <hr />
      <SubRoute routes={subRouters}/>
    </div>
  )
}

const RouteWithSubRoutes = route =>
  <Route
    path={route.path}
    render={() => (
      <route.component routes={route.children}/>
    )}
  />

export default routers =>
  <Router>
    <div className="container">
      <ul className="navigator">
        {createLinks(routers)}
      </ul>
      {map(routers, (route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>

