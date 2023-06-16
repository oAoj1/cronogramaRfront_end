import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import DaysList from '../../../inputs/daysList'
import TypeTasksList from '../../../inputs/typeTasksList'
import NameInput from '../../../inputs/nameInput'
import api from "../../../../services/api"

export default function AddTaskThursday(){

    const navigate = useNavigate()
    const [dadosTarefaQuinta,setDadosTarefaQuinta] = useState({
        periodoDia:'',
        tipoTarefa:'',
        nomeTarefa:'',
    })

    async function adicionarTarefa(event){
        event.preventDefault()
        
        api.post('/quinta', dadosTarefaQuinta)
            .then(dados => {
                alert('Tarefa adicionada com sucesso!')
                navigate('/')
            })
            .catch(err => {
                alert('Erro ao adicionar tarefa, cofira o console')
                console.log(err)
            })
    }
    

    return(
        <div className="addTaskContainer">
            <Link to='/' className='backPage'>
                <button>Voltar</button>
            </Link>

            <form 
                onSubmit={adicionarTarefa}
                className="formAddTask"
            >
                
                <h3>Periodo do dia:</h3>
                <DaysList
                    setFuncao={setDadosTarefaQuinta}
                    dados={dadosTarefaQuinta}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setDadosTarefaQuinta}
                    dados={dadosTarefaQuinta}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setDadosTarefaQuinta}
                    dados={dadosTarefaQuinta}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}