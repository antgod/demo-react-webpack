import React, { Component } from 'react';
import { mixin } from 'core-decorators';

const Theme = {
  setTheme() {
    this.initTheme()
  }
};

@mixin(Theme)
class CoreDecorators extends Component {

  initTheme(){
    console.log('initTheme')
  }

  render() {
    this.setTheme()
    return (
      <div>

      </div>
    )
  }
}

export default CoreDecorators;