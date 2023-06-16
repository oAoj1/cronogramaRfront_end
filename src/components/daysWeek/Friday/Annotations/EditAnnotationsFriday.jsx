import api from "../../../../services/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import NameInput from '../../../inputs/nameInput'

export default function EditAnnotationsFriday(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [listaAnotacoesSexta,setListaAnotacoesSexta] = useState([])

    useEffect(() => {
        async function extraindoDados(){
            await api.get(`/sexta/anotacoes/${id}`)
            .then(res => 
                setListaAnotacoesSexta(res.data)
            )
            .catch(err => 
                console.log(err)
            )
        }

        extraindoDados()

    },[])

    async function atualizandoTarefa(event){
        event.preventDefault()

        await api.put(`/sexta/anotacoes/${id}`, listaAnotacoesSexta)
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

                <h3>Nome da Anotação:</h3>
                    <NameInput
                        setFuncao={setListaAnotacoesSexta}
                        dados={listaAnotacoesSexta}
                        valor={listaAnotacoesSexta.nomeTarefa}
                        place='Nome da anotação'
                    />

                <br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}
