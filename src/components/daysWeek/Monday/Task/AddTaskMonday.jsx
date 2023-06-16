import api from "../../../../services/api"
import  DaysList  from '../../../inputs/daysList'
import  NameInput  from '../../../inputs/nameInput'
import  TypeTasksList  from '../../../inputs/typeTasksList'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AddTaskMonday(){

    const navigate = useNavigate()
    const [dadosTarefaSegunda,setDadosTarefaSegunda] = useState({
        periodoDia:'',
        tipoTarefa:'',
        nomeTarefa:''
    })

    async function adicionarTarefa(event){
        event.preventDefault()
        
        api.post('/segunda', dadosTarefaSegunda)
            .then(() => {
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
                    setFuncao={setDadosTarefaSegunda}
                    dados={dadosTarefaSegunda}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setDadosTarefaSegunda}
                    dados={dadosTarefaSegunda}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setDadosTarefaSegunda}
                    dados={dadosTarefaSegunda}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}