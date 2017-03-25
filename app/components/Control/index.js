import React, { Component } from 'react';



class Controlled extends React.Component {

  render() {
    return <div className="wrapper">
      <input type="checkbox" id='control' value={`on`} defaultChecked ={false} onClick={e=>{
        e.preventDefault()    //阻止默认，使组件非受控
      }} /><br/>
      <textarea name="description" defaultValue="This is a description." /><br/>
      <select multiple={true} defaultValue={['B', 'C']}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    </div>
  }
}



export default Controlled;
