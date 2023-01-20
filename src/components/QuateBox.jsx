import React from 'react'
import ButtonBox from './ButtonBox'


const QuateBox = ( {quote, handleClick, colorRandom} ) => {


  return (
   <article style={{ color: colorRandom }} className='box'>
    <i className='bx box__icon bxs-quote-alt-left' ></i>
    <p className='box_quote'>{quote.quote}</p>
    <h1 className='box_author'>{quote.author}</h1>
   <ButtonBox
    colorRandom={colorRandom}
    handleClick={handleClick}
   />
   </article>
  )
}

export default QuateBox