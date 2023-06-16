import api from "../../../../services/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

export default function EditTaskMonday(){

    const TiposTarefas = [
        '',
        'exercicio',
        'estudar',
        'entreterimento',
        'domestico'
    ]

    const PeriodosDias = [
        '',
        'manha',
        'tarde',
        'noite'
    ]

    const navigate = useNavigate()
    const {id} = useParams()
    const [listaTarefasSegunda,setListaTarefasSegunda] = useState([])

    useEffect(() => {
        async function editandoTarefa(){
            await api.get(`/segunda/${id}`)
            .then(res => setListaTarefasSegunda(res.data))
            .catch(err => console.log(err))
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
                <select 
                    required
                    value={listaTarefasSegunda.periodoDia}
                    onChange={e => setListaTarefasSegunda({
                        ...listaTarefasSegunda,periodoDia:e.target.value
                })}>
                    {PeriodosDias.map(periodos => (
                        <option key={periodos}>
                            {periodos}
                        </option>
                    ))}
                </select>

                <h3>Tipo de tarefa:</h3>
                <select 
                    required 
                    value={listaTarefasSegunda.tipoTarefa}
                    onChange={e => setListaTarefasSegunda({
                    ...listaTarefasSegunda,tipoTarefa:e.target.value
                })}>
                    {TiposTarefas.map(tipo => (
                        <option key={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>

                <h3>Nome da tarefa:</h3>
                <input
                    required 
                    type="text" 
                    value={listaTarefasSegunda.nomeTarefa}
                    placeholder="Nome da tarefa"
                    onChange={e => setListaTarefasSegunda({
                        ...listaTarefasSegunda, nomeTarefa:e.target.value
                    })}
                />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
