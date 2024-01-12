import React from "react";

export default function Option({ id, name, value, linkImg="", descricao="", text="", img, onCheck }) {
    return <li>
        <input type="radio" id={id} name={name} value={value} onClick={onCheck}/>
        <label htmlFor={id}>
            {img ? <img className="img-icon" src={linkImg} alt={descricao} /> : text} 
        </label>
    </li>
}