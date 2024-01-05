import './App.css'
import Choise from './components/choices.jsx'

function App() {
  return (
    <>
      <div id="screenMaker">
        <header>
          <h1>Monte sua Pizza</h1>
        </header>

        <div className="row">
          <section>
            <Choise type="massa"/>
          </section>
          <section>
            <Choise type="molho"/>
          </section>

        </div>
        <div className="row">
          <section>
            <h2>Tipo:</h2>
            <ul>
              <li>
                <input type="checkbox" id="checkboxVeg" name="recheio" value="verdura" />
                <label htmlFor="checkboxVeg">Verdura</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxNon-veg" name="recheio" value="carne" />
                <label htmlFor="checkboxNon-veg">Carne</label>
              </li>
            </ul>
          </section>
          <section>
            <img className='img-client' style={{width: 100, height: 100, margin: "auto"}}
              src="https://studio.code.org/v3/assets/5-IaxRvGY4VSCpbMf9JSgaFyrw9l6lBpwMY5QG1_6L4/client.png" />
          </section>
        </div>
        <footer>
          <button name="carrinho" id="buttonCart"> 🛒 </button>
          <button className="hidden" name="buttonCreate" id="buttonCreate"> ➡️ </button>
        </footer>
      </div>

      <section id="screenPizza" className="hidden">
        <div id="listaPizzas"></div>
        <div id="imagens">
          <img id="imageBase"
            src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000"
            alt="massa"/>

          <img className="hidden" id="imageYellowSauce"
              src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000"
              alt="molho amarelo"/>
          <img className="hidden" id="imageRedSauce"
                src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000"
                alt="molho vermelho"/>

          <img className="hidden" id="imageVegNon-veg"
                  src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/veg-nonveg.png?t=1670932317000"
                  alt="Non-Veg"/>
          <img className="hidden" id="imageVeg"
                    src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Veg.png?t=1670932317000"
                    alt="Non-Veg"/>
          <img className="hidden" id="imageNon-veg"
                      src="https://studio.code.org/v3/assets/ai36I_gY5JPKznE1ttg-CqVl0NhRRSPu1b34n7Ctx6c/Non-veg.png?t=1671892191000"
                      alt="Non-Veg"/>
        </div>
                    <footer>
                      <button id="buttonBack">⬅️</button>
                    </footer>
      </section>

                </>
                )
}

                export default App
