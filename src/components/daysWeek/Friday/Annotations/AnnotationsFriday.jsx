import api from '../../../../services/api'
import { useEffect, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { TiDelete } from 'react-icons/ti'
import { MdEdit } from 'react-icons/md'
import { BsPatchCheck } from 'react-icons/bs'
import { MdPriorityHigh } from 'react-icons/md'

export default function AnnotationsFriday(){

    const [anotacaoSexta,setAnotacaoSexta] = useState([])
    const [concluido,setConcluido] = useState([{
        concluido:''
    }])

    useEffect(() => {
        async function lerAnotacoesSexta(){
            const response = await api.get('/sexta/anotacoes?tipoTarefa=anotacoes')
            const data = response.data

            setAnotacaoSexta(data)
        }

        lerAnotacoesSexta()

    },[])

    async function excluirAnotacoes(id){
        const confirmar = window.confirm('Deseja excluir anotação?')

        if(confirmar){
            await api.delete(`/sexta/anotacoes/${id}`)
            .then(() => {
                alert('Anotação excluida com sucesso! recarregue a página')
            })
            .catch(err => {
                alert('Erro ao excluir anotação, confira o console')
                console.log(err)
            })
        }
    }

    useEffect(() => {
        async function filtrarConcluido(){
            const response = await api.get('/sexta/tipotarefa?tipoTarefa=anotacoes')
            const data = response.data

            setConcluido(data)
        }

        filtrarConcluido()

    },[])

    async function concluirTarefa(id){
        const confirmar = window.confirm('Deseja concluir anotação?')

        if(confirmar){
            await api.post(`/sexta/anotacoes/${id}`)
            .then(() => {
                alert('Anotação concluida! recarregue a página')
            })
            .catch(err => {
                alert('Erro ao concluir anotação, confira o console')
                console.log(err)
            })
        }
    }

    return(
        <div className='annotationsContainer'>
            
            <div className="titleAnnotations">
                <h2>Anotações:</h2>
                <Link to='/sexta/anotacoes'>
                    <GrAdd title='Adicionar anotação'/>
                </Link>
            </div>
            
            <ul className='anotacoesLista'>
                {anotacaoSexta.map(anotacoes => (
                    <li key={anotacoes._id}>
                        <div className='anotacao'>
                            {concluido.concluido == true ? 
                                <button 
                                    className='botaoMarcarConcluir'
                                    title='Tarefa concluida!'
                                >
                                    <BsPatchCheck/> 
                                </button>: 
                                <button 
                                    onClick={() => concluirTarefa(anotacoes._id)}    
                                    className='botaoConcluida'
                                    title='Concluir'
                                >
                                    <MdPriorityHigh/>
                                </button>
                            }
                            <span>{anotacoes.nomeTarefa}</span>

                            <div className='buttonsAnnotationsContainer'>
                                <Link to={`/sexta/anotacoes/${anotacoes._id}`}>
                                    <button 
                                        className='editarAnotacao'
                                        title='Editar'
                                    >
                                        <MdEdit/>
                                    </button>
                                </Link>

                                <button 
                                    className='excluirAnotacao'
                                    onClick={() => excluirAnotacoes(anotacoes._id)} 
                                    title='Excluir'
                                >
                                    <TiDelete/>
                                </button>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}