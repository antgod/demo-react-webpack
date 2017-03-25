'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Constant from './common/Constant'
import App from './components/App';
import RenderByType from './components/RenderByType';
import Context from './components/Context';
import Control from './components/Control';
import {  HighOrderComponent } from './components/Hoc';
import './index.less'


export default () => <div>
  <App/>
  <RenderByType/>
  <Context />
  <Control/>
  <HighOrderComponent />
</div>
