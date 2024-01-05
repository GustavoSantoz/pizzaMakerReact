import './App.css'
import { useState } from 'react'
import { PizzaScreen } from './components/ScreenPizza.jsx'
import Choise from './components/choices.jsx'
import { ClientImage } from './components/client.jsx'
import { Header } from './components/header.jsx'
import { Cart } from './components/cart.jsx'

const initState = {
  borda: "",
  molho: "",
  tipo: []
};

function App() {

  const [state, setState] = useState(initState);

  return (
    <>
      <div id="screenMaker">
        <Header />
        <div className="row">
          <section>
            <Choise type="massa" />
          </section>
          <section>
            <Choise type="molho" />
          </section>

        </div>
        <div className="row">
          <section>
            <Choise type="tipo" />
          </section>
          <section>
            <ClientImage />
          </section>
        </div>
        <footer>
          <Cart />
          <button className="hidden" name="buttonCreate" id="buttonCreate"> ➡️ </button>
        </footer>
      </div>

      <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} />

    </>
  )
}

export default App
