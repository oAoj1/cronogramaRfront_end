import api from "../../../../services/api"
import NameInput from '../../../inputs/nameInput'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AddAnnotationsThursday(){

    const navigate = useNavigate()
    const [dadosAnotacaoQuinta,setDadosAnotacaoQuinta] = useState({
        tipoTarefa:'anotacoes',
        nomeTarefa:''
    })

    async function adicionarAnotacao(event){
        event.preventDefault()
        
        api.post('/quinta', dadosAnotacaoQuinta)
            .then(dados => {
                alert('Anotação adicionada com sucesso!')
                navigate('/')
            })
            .catch(err => {
                alert('Erro ao anotar tarefa, confira o console')
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
                    dados={dadosAnotacaoQuinta.tipoTarefa}
                    desabilitar={true}
                />

                <h3>Nome da Anotação:</h3>
                <NameInput
                    setFuncao={setDadosAnotacaoQuinta}
                    dados={dadosAnotacaoQuinta}
                    place='Nome da anotação'
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}