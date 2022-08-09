import React, { Component } from 'react'

 class Cats extends Component {
  render() {
    console.log('Cat props form App.js',this.props);
    // let cats = this.state.cats.map(cat => (
    //   <p key={cat._id}>{cat.name} is {cat.color}</p>
    // ))
    return (
      <></>
      // <div>{cats}</div>
    )
  }
}
export default Cats;