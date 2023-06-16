import api from "../../../../services/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import NameInput from '../../../inputs/nameInput'

export default function EditAnnotationsMonday(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [listaAnotacoesSegunda,setListaAnotacoesSegunda] = useState([])

    useEffect(() => {
        async function extraindoDados(){
            await api.get(`/segunda/anotacoes/${id}`)
            .then(res => 
                setListaAnotacoesSegunda(res.data)
            )
            .catch(err => 
                console.log(err)
            )
        }

        extraindoDados()

    },[])

    async function atualizandoTarefa(event){
        event.preventDefault()

        await api.put(`/segunda/anotacoes/${id}`, listaAnotacoesSegunda)
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

                <h3>Nome da Anotação:</h3>
                    <NameInput
                        setFuncao={setListaAnotacoesSegunda}
                        dados={listaAnotacoesSegunda}
                        valor={listaAnotacoesSegunda.nomeTarefa}
                        place='Nome da anotação'
                    />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
