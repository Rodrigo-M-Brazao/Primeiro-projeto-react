import './InputText.css'
import { useState } from 'react';

export const InputText = (props) => {
    
    const aoDigitado = (event)=>{
        props.aoAlterado(event.target.value)
    }
    return (
        <div className="input-text">
                <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type='text'placeholder={props.placeholder}/>
                
        </div>
    )
}