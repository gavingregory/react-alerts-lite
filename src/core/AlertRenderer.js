import { Alert } from "./Alert";
import React, { Component } from 'react';
import { actions } from './actions';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { FadeAndSlideTransition } from '../transitions/FadeSlide';
import  { containerStyle } from "../css/styles"

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

const createHandlers = dispatch => {
  const handleRemove = id => {
    dispatch(actions.remove(id));
  }
  return {
    handleRemove
  }
}

export class AlertRenderer extends Component {

  constructor (props) {
    super(props);
    this.handlers = createHandlers(this.props.store.dispatch);
  }
  
  render() {
    console.log('rendering alert renderer');
    const { store } = this.props;
    return(
      <TransitionGroup>
        {store.state.alerts.current.map((alert, i) => (
            // <FadeAndSlideTransition duration={1000} key={`__rsa_alert_${alert.id}`} >
            <FadeAndSlideTransition duration={1000} key={`__rsa_alert_${alert.id}`}>
              {/* <Fade key={alert.id}> */}
              {/* <div style={{height: '50px', backgroundColor: 'green'}}>
asdasd
              </div> */}
              {/* <Alert pos={i} store={store} remove={this.handlers.handleRemove} {...alert}/> */}
              {/* <div> */}
                <Alert pos={i} remove={this.handlers.handleRemove} {...alert}/>
                
                {/* </div>   */}
            
            {/* </Fade> */}
            </FadeAndSlideTransition>

        ))}
      </TransitionGroup>
    )
  };
}