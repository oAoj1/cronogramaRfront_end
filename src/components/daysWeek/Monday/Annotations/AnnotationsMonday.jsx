import api from '../../../../services/api.js'
import { useEffect, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'

export default function AnnotationsMonday(){

    const [anotacaoSegunda,setAnotacaoSegunda] = useState([])

    useEffect(() => {
        async function lerAnotacoesSegunda(){
            const response = await api.get('/segunda/anotacoes?tipoTarefa=anotacoes')
            const data = response.data

            setAnotacaoSegunda(data)
        }

        lerAnotacoesSegunda()

    },[])

    async function excluirAnotacoes(id){
        const confirmar = window.confirm('Deseja excluir anotação?')

        if(confirmar){
            await api.delete(`/segunda/anotacoes/${id}`)
            .then(res => {
                alert('Anotação excluida com sucesso! recarregue a página')
            })
            .catch(err => {
                alert('Erro ao excluir anotação, confira o console')
                console.log(err)
            })
        }
    }

    return(
        <div className='annotationsContainer'>
            <div className="titleAnnotations">
                <h2>Anotações:</h2>
                <Link to='/segunda/anotacoes'>
                    <GrAdd title='Adicionar anotação'/>
                </Link>
            </div>
            
            <ul className='anotacoesLista'>
                {anotacaoSegunda.map(anotacoes => (
                    <li key={anotacoes._id}>
                        <div className='anotacao'>
                            <span>{anotacoes.nomeTarefa}</span>

                            <div className='buttonsAnnotationsContainer'>
                                <Link to={`/segunda/anotacoes/${anotacoes._id}`}>
                                    <button 
                                        className='editarAnotacao'
                                        title='Editar'>
                                        <MdEdit/>
                                    </button>
                                </Link>

                                <button 
                                    className='excluirAnotacao'
                                    onClick={() => excluirAnotacoes(anotacoes._id)} 
                                    title='Excluir'>
                                    <BsFillTrashFill/>
                                </button>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}