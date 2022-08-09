import React, { Component } from 'react'
import {Button, Container, ListGroup} from 'react-bootstrap';


 class Cats extends Component {
  render() {
    console.log('Cat props form App.js',this.props.cats);

    let cats = this.props.cats.map(cat => (
    
      <ListGroup.Item key={cat._id}>{cat.name} is {cat.color}</ListGroup.Item>

    ));
  
    return (
    <Container>
      <ListGroup>
          {cats}
      </ListGroup>
    </Container>
     
    )
  }
}
export default Cats;