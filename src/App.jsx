import { useState } from 'react'
import './App.css'
import QuateBox from './components/QuateBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const randomElement = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }


  const [quoteRandom, setquotesRandom] = useState(randomElement(quotes))

  const [colorRandom, setcolorRandom] = useState(randomElement(colors))

  const handleClick = () => {
    setquotesRandom(randomElement(quotes))
    setcolorRandom(randomElement(colors))
  } 
  
  
  return (
    <div style={{ backgroundColor: colorRandom }} className="App">
    <QuateBox 
      quote={quoteRandom} 
      handleClick={handleClick}
      colorRandom={colorRandom}
    />
    </div>
  )
}

export default App
