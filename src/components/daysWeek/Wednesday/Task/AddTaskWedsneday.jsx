import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import DaysList from '../../../inputs/daysList'
import TypeTasksList from '../../../inputs/typeTasksList'
import NameInput from '../../../inputs/nameInput'
import api from "../../../../services/api"

export default function AddTaskWednesday(){

    const navigate = useNavigate()
    const [dadosTarefaQuarta,setDadosTarefaQuarta] = useState({
        periodoDia:'',
        tipoTarefa:'',
        nomeTarefa:'',
        tarefaConcluida:false
    })

    async function adicionarTarefa(event){
        event.preventDefault()
        
        api.post('/quarta', dadosTarefaQuarta)
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
                <button>
                    Voltar
                </button>
            </Link>

            <form 
                onSubmit={adicionarTarefa}
                className="formAddTask"
            >
                
                <h3>Periodo do dia:</h3>
                <DaysList
                    setFuncao={setDadosTarefaQuarta}
                    dados={dadosTarefaQuarta}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setDadosTarefaQuarta}
                    dados={dadosTarefaQuarta}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setDadosTarefaQuarta}
                    dados={dadosTarefaQuarta}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}