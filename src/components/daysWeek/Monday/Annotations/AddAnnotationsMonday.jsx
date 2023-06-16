import api from '../../../../services/api'
import NameInput from '../../../inputs/nameInput'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AddAnnotationsMonday(){

    const navigate = useNavigate()
    const [dadosAnotacaoSegunda,setDadosAnotacaoSegunda] = useState({
        tipoTarefa:'anotacoes',
        nomeTarefa:''
    })

    async function adicionarAnotacao(event){
        event.preventDefault()
        
        api.post('/segunda', dadosAnotacaoSegunda)
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
                    dados={dadosAnotacaoSegunda.tipoTarefa}
                    desabilitar={true}
                />

                <h3>Nome da Anotação:</h3>
                <NameInput
                    setFuncao={setDadosAnotacaoSegunda}
                    dados={dadosAnotacaoSegunda}
                    place='Nome da anotação'
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}