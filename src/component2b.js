import React, { Fragment } from 'react';
import './styles2.css';


export class ChangeButton extends React.Component {
    state = {
        isActive: false
    }
    
    handleActive = (e) => {
        this.setState({
            isActive: !this.state.isActive
        })
        console.log(this.state.isActive);
    }
   
    render(){
        return(
            <Fragment>
                <Button click={e => this.handleActive(e)} {...this.state}/>
                <Box {...this.state}/>
            </Fragment>
        );
    }
}

// pase data entre componentes desde el padre al hijo, y desde el hijo actualice el objeto estado del padre
const Button = (props) => {
    const {isActive} = props;
    return(
        <Fragment>
            <button onClick={props.click}>{isActive ? 'on' : 'off'}</button>
        </Fragment>
    );
}

const Box = (props) => {
    const {isActive} = props;
    return(
        <Fragment>
            <div id='box' className={isActive ? 'blue' : 'red'}></div>
        </Fragment>
    );
}