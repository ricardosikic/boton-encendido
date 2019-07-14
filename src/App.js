import React, { Fragment } from 'react';
import './styles.css';
import { 
  Button,
  Container,
  Row,
  Col
 } from 'reactstrap';


export class Toggle extends React.Component {
  
  state = {
    isActive: false,
  }
  
  changeColor = (e) => {
    e.preventDefault();
    this.setState({
      isActive: !this.state.isActive
    })
    
  }

  render() {
    return(
      <Fragment>
        <Container id='box' className={this.state.isActive ? 'is-dark' : 'is-light'}>
          <h1 className={this.state.isActive ? 'light' : 'none'}>Ahorra Luz</h1>
          <Boton action={e => this.changeColor(e)} text='Presiona'/>
        </Container>
      </Fragment>
    );
  }
}


const Boton = (props) => {
  return(
    <Fragment>
      <Button className='ml-5' onClick={props.action} >{props.text}</Button>
    </Fragment>
  );
}