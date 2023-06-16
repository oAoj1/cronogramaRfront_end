import api from "../../../../services/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import NameInput from '../../../inputs/nameInput'

export default function EditAnnotationsWednesday(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [listaAnotacoesQuarta,setListaAnotacoesQuarta] = useState([])

    useEffect(() => {
        async function extraindoDados(){
            await api.get(`/quarta/anotacoes/${id}`)
            .then(res => 
                setListaAnotacoesQuarta(res.data)
            )
            .catch(err => 
                console.log(err)
            )
        }

        extraindoDados()

    },[])

    async function atualizandoTarefa(event){
        event.preventDefault()

        await api.put(`/quarta/anotacoes/${id}`, listaAnotacoesQuarta)
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
                        setFuncao={setListaAnotacoesQuarta}
                        dados={listaAnotacoesQuarta}
                        valor={listaAnotacoesQuarta.nomeTarefa}
                        place='Nome da anotação'
                    />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
