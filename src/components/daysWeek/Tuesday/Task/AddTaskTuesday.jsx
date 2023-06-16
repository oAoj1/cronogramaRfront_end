import api from '../../../../services/api.js'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import DaysList from '../../../inputs/daysList'
import TypeTasksList from '../../../inputs/typeTasksList'
import NameInput from '../../../inputs/nameInput'

export default function AddTaskTuesday(){

    const navigate = useNavigate()
    const [dadosTarefaTerca,setDadosTarefaTerca] = useState({
        periodoDia:'',
        tipoTarefa:'',
        nomeTarefa:''
    })

    async function adicionarTarefa(event){
        event.preventDefault()
        
        api.post('/terca', dadosTarefaTerca)
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
                    setFuncao={setDadosTarefaTerca}
                    dados={dadosTarefaTerca}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setDadosTarefaTerca}
                    dados={dadosTarefaTerca}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setDadosTarefaTerca}
                    dados={dadosTarefaTerca}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}