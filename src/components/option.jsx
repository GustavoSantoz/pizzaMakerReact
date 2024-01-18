import React from "react";

/**
 * @typedef {Object} Props
 * @property {string} Props.id - Usado para identificar a escolha / Achado nas tags ```<input/>``` e ```<label/>```.
 * @property {string} Props.name - Usado para um rapido entendimento de qual escolha está mexendo. / Achado na tag ```<input/>```
 * @property {string} Props.value - Usado para identificar os ingredientes da pizza e para ser colocado dentro do array / Achado dentro da tag ```<input/>```.
 * @property {string} Proprs.linkImg - Usado para ser colocado o link da imagem dos ingredientes  / Achado nas propriedade "src" da tag ```<img/>```.
 * @property {string} Props.descricao - Usado para descrever a imagem / Achado na propriedade "alt"  da tag ```<img/>```.
 * @property {string} Props.text - Usado para aparecer um texto em vez de uma imagem. / Usado atualmente na escolha dos tipos.
 * @property {boolean} Props.img - Usado para uma verificação se vai aparecer uma imagem ou um texto /  Recebido "true" conta com uma imagem, caso seja "false" é um texto"
 * @property {function} Props.onCheck - Usado para informar ao React se o estado do input foi clickado ou não / Achado na tag ```<input/>```
 * @property {string} Props.type - Usado para decidir qual vai ser o tipo do input / Usado atualmente "radio" ou "checkbox"
 *
 * @param {Props} props
 * @returns
 */
export default function Option({ id, name, value, linkImg, descricao, text, img, onCheck, type }) {
    return <li>
        <input type={type} id={id} name={name} value={value} onClick={onCheck} />
        <label htmlFor={id}>
            {img ? <img className="img-icon" src={linkImg} alt={descricao} /> : text}
        </label>
    </li>
}