import '../../Styles/DaysWeek.css'
import api from '../../services/api.js'
import { useState,useEffect } from 'react'
import { BsFillTrashFill,BsPatchCheck } from 'react-icons/bs'
import { MdEdit,MdPriorityHigh } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function DayTodayWeek({tipoTarefa,nomeTarefa,diaSemana,id,concluido}){

    const [icon,setIcon] = useState('')
    const [lista,setLista] = useState([])

    async function excluirTarefa(){
        const confirmar = window.confirm('Deseja excluir tarefa?')

        if(confirmar){
            await api.delete(`/${diaSemana}/${id}`)
                .then(() => {
                    alert('Tarefa excluida com sucesso! recarregue a página')
                })
                .catch(err => {
                    alert('Erro ao excluir tarefa, confira o console')
                    console.log(err)
                })
                
        }
    }

    async function concluirTarefa(){
        const confirmar = window.confirm('Deseja concluir tarefa?')

        if(confirmar){
            await api.post(`/${diaSemana}/${id}`)
                .then(() => {
                    alert('Tarefa concluida com sucesso! recarregue a página')
                })
                .catch(err => {
                    alert('Erro ao concluir tarefa, confira o console')
                    console.log(err)
                })

        }
    }

    useEffect(() => {
        var data = new Date()
        var diaHoje = data.getDay()
        
        if(diaHoje == 7){
            diaHoje = 'Domingo'
            concluido = false
        }

    },[])

    return(
        <section className='dayTodayContainer'>

            {concluido == true ? 
                <button 
                    className='botaoMarcarConcluir'
                    title='Tarefa concluida!'
                >
                    <BsPatchCheck/> 
                </button>: 
                <button 
                    onClick={e => concluirTarefa(e._id)}    
                    className='botaoConcluida'
                    title='Concluir'
                >
                    <MdPriorityHigh/>
                </button>
            }

            <div className='dayTodayWraper'>
                <h5>{tipoTarefa}</h5>
                <h3>{nomeTarefa}</h3>

                <div className='buttonsContainer'>
                    <Link to={`/${diaSemana}/${id}`}>
                        <button title='Editar'>
                            <MdEdit/>
                        </button>
                    </Link>

                    <button onClick={e => excluirTarefa(e._id)} title='Excluir'>
                        <BsFillTrashFill/>
                    </button>
                </div>
            </div>
        </section>
    )
}
