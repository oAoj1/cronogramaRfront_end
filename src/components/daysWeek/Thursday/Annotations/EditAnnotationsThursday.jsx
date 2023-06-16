import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import api from "../../../../services/api"
import NameInput from '../../../inputs/nameInput'

export default function EditAnnotationsThursday(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [listaAnotacoesQuinta,setListaAnotacoesQuinta] = useState([])

    useEffect(() => {
        async function extraindoDados(){
            await api.get(`/quinta/anotacoes/${id}`)
            .then(res => 
                setListaAnotacoesQuinta(res.data)
            )
            .catch(err => 
                console.log(err)
            )
        }

        extraindoDados()

    },[])

    async function atualizandoTarefa(event){
        event.preventDefault()

        await api.put(`/quinta/anotacoes/${id}`, listaAnotacoesQuinta)
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
                        setFuncao={setListaAnotacoesQuinta}
                        dados={listaAnotacoesQuinta}
                        valor={listaAnotacoesQuinta.nomeTarefa}
                        place='Nome da anotação'
                    />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
