import api from '../../../../services/api.js'
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import TypeTasksList from '../../../inputs/typeTasksList'
import NameInput from '../../../inputs/nameInput'
import DaysList from '../../../inputs/daysList'

export default function EditTaskMonday(){

    const navigate = useNavigate()
    const {id} = useParams()
    const [listaTarefasSegunda,setListaTarefasSegunda] = useState([])

    useEffect(() => {
        async function editandoTarefa(){
            await api.get(`/segunda/${id}`)
            .then(res => 
                setListaTarefasSegunda(res.data)
            )
            .catch(err => 
                console.log(err)
            )
        }

        editandoTarefa()

    },[])

    async function atualizandoTarefa(event){
        event.preventDefault()

        await api.put(`/segunda/${id}`, listaTarefasSegunda)
        .then(res => {
            alert('Tarefa atualizada com sucesso')
            navigate('/')
        })
    }

    return(
        <div className="editTaskContainer">
            <Link to='/' className='backPage'>
                <button>Voltar</button>
            </Link>

            <form 
                onSubmit={atualizandoTarefa}
                className="formEditTask"
            >
                <h3>Periodo do dia:</h3>
                <DaysList
                    setFuncao={setListaTarefasSegunda}
                    dados={listaTarefasSegunda}
                    valor={listaTarefasSegunda.periodoDia}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setListaTarefasSegunda}
                    dados={listaTarefasSegunda}
                    valor={listaTarefasSegunda.tipoTarefa}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setListaTarefasSegunda}
                    dados={listaTarefasSegunda}
                    valor={listaTarefasSegunda.nomeTarefa}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
