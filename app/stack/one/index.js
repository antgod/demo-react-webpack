import '../index.less'
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import routers from '@app/routers'
import { generatorSubRouter } from '@common/router'

export default () => {
  return generatorSubRouter(routers.one.children)
}