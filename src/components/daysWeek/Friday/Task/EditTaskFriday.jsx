import api from "../../../../services/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import TypeTasksList from '../../../inputs/typeTasksList'
import NameInput from "../../../inputs/nameInput"
import DaysList from '../../../inputs/daysList'

export default function EditTaskFriday(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [listaTarefasSexta,setListaTarefasSexta] = useState([])

    useEffect(() => {
        async function exibindoDados(){
            await api.get(`/sexta/${id}`)
            .then(res => 
                setListaTarefasSexta(res.data)
            )
            .catch(err => 
                console.log(err)
            )
        }

        exibindoDados()

    },[])

    async function atualizandoTarefa(event){
        event.preventDefault()

        await api.put(`/sexta/${id}`, listaTarefasSexta)
        .then(res => {
            alert('Tarefa atualizada com sucesso')
            navigate('/')
        })
    }

    return(
        <div className="editAnnotationContainer">
            <Link to='/' className='backPage'>
                <button>Voltar</button>
            </Link>

            <form 
                onSubmit={atualizandoTarefa}
                className="formEditAnnotation"
            >
                <h3>Periodo do dia:</h3>
                <DaysList
                    setFuncao={setListaTarefasSexta}
                    dados={listaTarefasSexta}
                    valor={listaTarefasSexta.periodoDia}
                />

                <h3>Tipo de tarefa:</h3>
                <TypeTasksList
                    setFuncao={setListaTarefasSexta}
                    dados={listaTarefasSexta}
                    valor={listaTarefasSexta.tipoTarefa}
                />

                <h3>Nome da tarefa:</h3>
                <NameInput
                    setFuncao={setListaTarefasSexta}
                    dados={listaTarefasSexta}
                    valor={listaTarefasSexta.nomeTarefa}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
