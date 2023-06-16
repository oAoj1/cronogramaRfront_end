import api from "../../../../services/api"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import DaysList from '../../../inputs/daysList'
import TypeTasksList from '../../../inputs/typeTasksList'
import NameInput from '../../../inputs/nameInput'

export default function AddTaskFriday(){

    const navigate = useNavigate()
    const [dadosTarefaSexta,setDadosTarefaSexta] = useState({
        periodoDia:'',
        tipoTarefa:'',
        nomeTarefa:'',
    })

    async function adicionarTarefa(event){
        event.preventDefault()
        
        api.post('/sexta', dadosTarefaSexta)
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
                    setFuncao={setDadosTarefaSexta}
                    dados={dadosTarefaSexta}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setDadosTarefaSexta}
                    dados={dadosTarefaSexta}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setDadosTarefaSexta}
                    dados={dadosTarefaSexta}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}