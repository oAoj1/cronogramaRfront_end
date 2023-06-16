import api from '../../../../services/api'
import { useEffect, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'

export default function AnnotationsWednesday(){

    const [anotacaoQuarta,setAnotacaoQuarta] = useState([])

    useEffect(() => {
        async function lerAnotacoesQuarta(){
            const response = await api.get('/quarta/anotacoes?tipoTarefa=anotacoes')
            const data = response.data

            setAnotacaoQuarta(data)
        }

        lerAnotacoesQuarta()

    },[])

    async function excluirAnotacoes(id){
        const confirmar = window.confirm('Deseja excluir anotação?')

        if(confirmar){
            await api.delete(`/quarta/anotacoes/${id}`)
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
                <Link to='/quarta/anotacoes'>
                    <GrAdd title='Adicionar anotação'/>
                </Link>
            </div>
            
            <ul className='anotacoesLista'>
                {anotacaoQuarta.map(anotacoes => (
                    <li key={anotacoes._id}>
                        <div className='anotacao'>
                            <span>{anotacoes.nomeTarefa}</span>

                            <div className='buttonsAnnotationsContainer'>
                                <Link to={`/quarta/anotacoes/${anotacoes._id}`}>
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