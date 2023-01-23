import React from 'react'
import ButtonBox from './ButtonBox'
import ImageQuotes from './ImageQuotes'
import Quotes from './Quotes'


const QuateBox = ( {quote, handleClick, colorRandom} ) => {


  return (
   <article style={{ color: colorRandom }} className='box'>

    <ImageQuotes/>
    
    <Quotes 
    quote={quote}
    />

   <ButtonBox
    colorRandom={colorRandom}
    handleClick={handleClick}
   />
   </article>
  )
}

export default QuateBox