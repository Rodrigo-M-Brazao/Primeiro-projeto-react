import './InputText.css'

export const InputText = (props) => {
    return (
        <div className="input-text">
                <label>{props.label}</label>
                <input type='text'placeholder={props.placeholder}/>
                
        </div>
    )
}