import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className='mainbody-title-container'>
        <h1 className="mainbody-title">
            {props.title}
        </h1>
    </div>
  )
}

export default Title
