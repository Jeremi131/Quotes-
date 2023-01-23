import React from 'react'

const Quotes = ({quote}) => {
  return (
    <div>
    <p className='box_quote'>{quote.quote}</p>
    <h1 className='box_author'>{quote.author}</h1>
    </div>
  )
}

export default Quotes