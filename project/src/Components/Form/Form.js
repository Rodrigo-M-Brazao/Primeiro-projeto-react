import Botao from '../Botao'
import InputSelect from '../InputSelect'
import InputText from '../InputText'
import './Form.css'

export const Form = () => {
    const times = [
        'Back-End',
        'Front-End',
        'FullStack',
        'Data Science',
        'UX/UI',
        'DevOps'
    ]
    const onSave = (event) =>{
        event.preventDefault();
        console.log('form foi submetido')
    }
    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <InputText obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
                <InputSelect label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}