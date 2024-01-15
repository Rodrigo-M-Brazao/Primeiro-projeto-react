import { useState } from 'react'
import Botao from '../Botao'
import InputSelect from '../InputSelect'
import InputText from '../InputText'
import './Form.css'

export const Form = (props) => {
    const times = [
        'Back-End',
        'Front-End',
        'FullStack',
        'Data Science',
        'UX/UI',
        'DevOps'
    ]
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const onSave = (event) =>{
        event.preventDefault();
        props.aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText                    
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor=> setNome(valor)}
                />
                <InputText                    
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor=> setCargo(valor)}
                />
                <InputText                    
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor=> setImagem(valor)}
                />
                <InputSelect 
                    label="Time" 
                    itens={times} 
                    valor={time}
                    aoAlterado={valor=> setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}