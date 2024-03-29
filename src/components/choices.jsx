import React from 'react'
import Option from './option.jsx'


const Choices = ({ type, onMassa, onMolho, onTipo }) => {
    function EscolhaDeTipos(e) {
        if (e == "carne" && e == "verdura") {
            console.log("Os dois");
        } else if (e == 'carne') {
            console.log("Apenas Carne");
        } else {
            console.log("Apenas Verdura");
        }
    }

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
                        img={true}
                        onCheck={() => onMassa('borda')}
                        type='radio'
                    />

                    <Option
                        id="radioBase2"
                        name="massa"
                        value="tradicional"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-02.png?t=1670932317000"
                        descricao="Massa Tradicional"
                        img={true}
                        onCheck={() => onMassa('tradicional')}
                        type='radio'
                    />

                    <Option
                        id="radioBase3"
                        name="massa"
                        value="fina"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000"
                        descricao="Massa Fina"
                        img={true}
                        onCheck={() => onMassa('fina')}
                        type='radio'
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
                        img={true}
                        onCheck={() => onMolho('vermelho')}
                        type='radio'
                    />

                    <Option
                        id="radioYellowSauce"
                        name="molho"
                        value="amarelo"
                        linkImg="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000"
                        descricao="Molho Amarelo"
                        img={true}
                        onCheck={() => onMolho('amarelo')}
                        type='radio'
                    />


                </ul>
            </>;

        case 'tipo':
            return <>
                <h2>Tipo:</h2>
                <ul>
                    <Option
                        id="checkboxVeg"
                        name="recheio"
                        value="verdura"
                        text="Vegetariana"
                        img={false}
                        onCheck={() => EscolhaDeTipos(["verdura"])}
                        type='checkbox'
                    />
                    <Option
                        id="checkboxNon-veg"
                        name="recheio"
                        value="carne"
                        text="Carnivora"
                        img={false}
                        onCheck={() => EscolhaDeTipos(["carne"])}
                        type='checkbox'
                    />
                </ul>
            </>
    }

}

export default Choices
