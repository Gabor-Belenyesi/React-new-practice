import React from 'react'

function Beer(props) {
    const beerData = props.beerData
    const {title, sub} = beerData
  return (
    <div>
        <h1>{title}</h1>
        <p>{sub}</p>
    </div>
  )
}

export default Beer