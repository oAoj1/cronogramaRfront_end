import api from '../../../../services/api.js'
import NameInput from '../../../inputs/nameInput'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AddAnnotationsTuesday(){

    const navigate = useNavigate()
    const [dadosAnotacaoTerca,setDadosAnotacaoTerca] = useState({
        tipoTarefa:'anotacoes',
        nomeTarefa:''
    })

    async function adicionarAnotacao(event){
        event.preventDefault()
        
        api.post('/terca', dadosAnotacaoTerca)
            .then(dados => {
                alert('Anotação adicionada com sucesso!')
                navigate('/')
            })
            .catch(err => {
                alert('Erro ao anotação tarefa, cofira o console')
                console.log(err)
            })
    }
    

    return(
        <div className="addTaskContainer">
            <Link to='/' className='backPage'>
                <button>Voltar</button>
            </Link>

            <form 
                onSubmit={adicionarAnotacao}
                className="formAddTask"
            >
                <h3>Tipo Tarefa:</h3>
                <NameInput
                    valor='anotacao'
                    dados={dadosAnotacaoTerca.tipoTarefa}
                    desabilitar={true}
                />

                <h3>Nome da Anotação:</h3>
                <NameInput
                    setFuncao={setDadosAnotacaoTerca}
                    dados={dadosAnotacaoTerca}
                    place='Nome da anotação'
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}