import './App.css'
import { useState } from 'react'
import { PizzaScreen } from './components/ScreenPizza.jsx'
import { ScreenMaker } from './ScreenMaker.jsx'

const initState = {
  borda: "",
  molho: "",
  tipo: []
};

function App() {

  const [state, _setState] = useState(initState);
  const [isMakeVisible, setIsMakeVisible] = useState(true)

  return (
    <>
      {
      isMakeVisible 
      ? 
      <ScreenMaker onChange={_setState} submit={() => {setIsMakeVisible(false)}}/> 
      : 
      <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} submit2={() => {setIsMakeVisible(true)}}/>
      }
    </>
  )
}

export default App
