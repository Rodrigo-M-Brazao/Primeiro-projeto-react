import './InputSelect.css'

export const InputSelect = (props) => {
   return (
    <div className='input-select'>
        <label>{props.label}</label>
        <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.valor}>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
   )
}

