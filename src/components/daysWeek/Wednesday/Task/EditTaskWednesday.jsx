import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import api from "../../../../services/api"
import TypeTasksList from '../../../inputs/typeTasksList'
import NameInput from '../../../inputs/nameInput'
import DaysList from '../../../inputs/daysList'

export default function EditTaskWednesday(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [listaTarefasQuarta,setListaTarefasQuarta] = useState([])

    useEffect(() => {
        async function editandoTarefa(){
            await api.get(`/quarta/${id}`)
            .then(res => 
                setListaTarefasQuarta(res.data)
            )
            .catch(err => 
                console.log(err)
            )
        }

        editandoTarefa()

    },[])

    async function atualizandoTarefa(event){
        event.preventDefault()

        await api.put(`/quarta/${id}`, listaTarefasQuarta)
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
                    setFuncao={setListaTarefasQuarta}
                    dados={listaTarefasQuarta}
                    valor={listaTarefasQuarta.periodoDia}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setListaTarefasQuarta}
                    dados={listaTarefasQuarta}
                    valor={listaTarefasQuarta.tipoTarefa}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setListaTarefasQuarta}
                    dados={listaTarefasQuarta}
                    valor={listaTarefasQuarta.nomeTarefa}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
