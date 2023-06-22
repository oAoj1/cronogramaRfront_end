import api from '../../../../services/api'
import { useEffect, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'

export default function AnootationsThursday(){

    const [anotacaoQuinta,setAnotacaoQuinta] = useState([])

    useEffect(() => {
        async function lerAnotacoesQuinta(){
            const response = await api.get('/quinta/anotacoes?tipoTarefa=anotacoes')
            const data = response.data

            setAnotacaoQuinta(data)
        }

        lerAnotacoesQuinta()

    },[])

    async function excluirAnotacoes(id){
        const confirmar = window.confirm('Deseja excluir anotação?')

        if(confirmar){
            await api.delete(`/quinta/anotacoes/${id}`)
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
                <Link to='/quinta/anotacoes'>
                    <GrAdd title='Adicionar anotação'/>
                </Link>
            </div>
            
            <ul className='anotacoesLista'>
                {anotacaoQuinta.map(anotacoes => (
                    <li key={anotacoes._id}>
                        <div className='anotacao'>
                            <span>{anotacoes.nomeTarefa}</span>

                            <div className='buttonsAnnotationsContainer'>
                                <Link to={`/quinta/anotacoes/${anotacoes._id}`}>
                                    <button title='Editar'>
                                        <MdEdit/>
                                    </button>
                                </Link>

                                <button 
                                    onClick={() => excluirAnotacoes(anotacoes._id)} 
                                    title='Excluir'
                                >
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