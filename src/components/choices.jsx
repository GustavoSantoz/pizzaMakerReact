import React from 'react'
import Option from './option.jsx'


const Choices = ({type}) => {
    switch (type) {
        case 'massa':
            return <>
                <h2>Massa:</h2>
                <ul className='container-masssa'>
                    <Option
                        id="radioBase1"
                        name="massa"
                        value="borda"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-01.png?t=1670932317000"
                        descricao="Borda Recheada"
                    />

                    <Option
                        id="radioBase2"
                        name="massa"
                        value="tradicional"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-02.png?t=1670932317000"
                        descricao="Massa Tradicional"
                    />

                    <Option
                        id="radioBase3"
                        name="massa"
                        value="fina"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000"
                        descricao="Massa Fina"
                    />

                </ul>
            </>
        case 'molho':
            return <>
                <h2>Molho:</h2>
                <ul className='container-molho'>
                    <Option
                        id="radioRedSauce"
                        name="molho"
                        value="vermelho"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000"
                        descricao="Molho de Tomate"
                    />

                    <Option
                        id="radioYellowSauce"
                        name="molho"
                        value="amarelo"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000"
                        descricao="Molho Amarelo"
                    />


                </ul>
            </>;
    }

}

export default Choices
