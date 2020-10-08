import React from 'react';

import './Button.css';

export default props => {

  return (
    <button className='button' onClick={_=> props.click(props.label)}> {props.label}</button>
  )
}