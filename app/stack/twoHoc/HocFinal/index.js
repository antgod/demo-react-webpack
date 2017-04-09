import React, { Component } from 'React'
import {HocProxy, HocExtend} from './wrapper/Hoc'
import HocPanel from './wrapper/HocPanel'

import ViewHoldExtend from './examples/extend/ViewHold'
import ViewHoldProxy from './examples/proxy/ViewHold'
import PropsHoldExtend from './examples/extend/PropsHold'
import PropsHoldProxy from './examples/proxy/PropsHold'
import ViewPropsExtend from './examples/extend/ViewProps'
import ViewPropsProxy from './examples/proxy/ViewProps'
import ViewClassNameExtend from './examples/extend/ViewClassName'
import ViewClassNameProxy from './examples/proxy/ViewClassName'
import HocFactoryExtend from './examples/extend/HocFactory'
import HocFactoryProxy from './examples/proxy/HocFactory'

const createContainer = () => {
  return (<div>
    <HocProxy>
      <HocPanel title="渲染劫持">
        <ViewHoldProxy desc="正常" text="Hello World" login={true}/>
        <ViewHoldProxy desc="劫持" text="Hello World" />
      </HocPanel>
      <HocPanel title="属性劫持">
        <PropsHoldProxy desc="正常" text="Hello World" login={true}/>
        <PropsHoldProxy desc="劫持" text="Hello World" />
      </HocPanel>
      <HocPanel title="属性预览">
        <ViewPropsProxy text="Hello World" />
      </HocPanel>
      <HocPanel title="类名展示">
        <ViewClassNameProxy text="Hello World" />
      </HocPanel>
      <HocPanel title="高阶工厂">
        <HocFactoryProxy />
      </HocPanel>
    </HocProxy>
    <HocExtend>
      <HocPanel title="渲染劫持">
        <ViewHoldExtend desc="正常" text="Hello World" login={true}/>
        <ViewHoldExtend desc="劫持" text="Hello World" />
      </HocPanel>
      <HocPanel title="属性劫持">
        <PropsHoldExtend desc="正常" text="Hello World" login={true} />
        <PropsHoldExtend desc="劫持" text="Hello World" />
      </HocPanel>
      <HocPanel title="属性预览">
        <ViewPropsExtend text="Hello World" />
      </HocPanel>
      <HocPanel title="类名展示">
        <ViewClassNameExtend text="Hello World" />
      </HocPanel>
      <HocPanel title="高阶工厂">
        <HocFactoryExtend />
      </HocPanel>
    </HocExtend>
  </div>)
}

export default createContainer
