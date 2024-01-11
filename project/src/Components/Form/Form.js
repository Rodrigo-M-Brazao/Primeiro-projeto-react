import { InputText } from '../InputText/InputText'
import './Form.css'

export const Form = () => {
    return (
        <section className='formulario'>
            <form>
                <InputText label="Nome" placeholder="Digite seu nome"/>
                <InputText label="Cargo" placeholder="Digite seu cargo"/>
                <InputText label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}