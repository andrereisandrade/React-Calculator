import React from 'react';

import './Display.css';

export default props => {
  return (
    <div className="display">
      <h1>{props.value}</h1>
    </div>
  )
}