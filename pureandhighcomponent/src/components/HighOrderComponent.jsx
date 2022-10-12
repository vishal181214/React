import React, { useState } from 'react'

export default function HighOrderComponent(props) {
  return (
    <div className='card text-center mt-5'>
      <div className='card-header'><h2>High Order Component</h2></div>
      <div className='card-title'>
          <h2 className='p-5'>{props.comp}</h2>
      </div>
      <div className='card-footer text-muted'>
        <h5>A higher-order component is a function that takes a component and returns a new component.</h5>
        <h5>Syntax</h5>
            <h6>const NewComponent = higherOrderComponent(WrappedComponent);</h6>
      </div>
    </div>
  )
}


