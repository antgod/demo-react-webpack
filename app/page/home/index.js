import React from 'react'
import './index.less'

export default () => (<div className="home">
  本项目记录了深入react技术栈的全部内容。您可以边阅读文档边看示例。
  <br/>
  <div className="home-title">请选择章节以及课程。</div>
  第一行（one, two ...）是章节章节导航，分别对应doc下面的每个文件（比如one对应1.初入React世界.md）。
  <br/>
  第二行是课程导航，分别对应doc下面的每个文件（比如one对应1.初入React世界.md）。
  <br/>
  <div className="home-title">每节课程包括两项：</div>
  1. 效果： 展示效果，可以参考代码观看代码效果
  <br/>
  2. 说明以及源文件： 每节课都有自己的md，可以在 /app/stack/章节/课程/index.md 中编写
</div>)
