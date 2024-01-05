import React from "react";

export default function Option({ id, name, value, linkImg = "", descricao }) {
    return <li>
        <input type="radio" id={id} name={name} value={value} />
        <label htmlFor={id}>
            {img ? <img className="img-icon" src={linkImg} alt={descricao} /> : string} 
        </label>
    </li>
}