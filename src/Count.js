import React from 'react'

const Count = (props) => (
    <ul>
      {
        props.previous.map((el,idx) => <li key={idx}>{el}</li>)
      }
    </ul>
)

export default Count
