import '../../Styles/DaysWeek.css'
import { useState } from 'react'
import api from '../../services/api.js'
import { BsFillTrashFill,BsPatchCheck } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
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

    return(
        <section className='dayTodayContainer'>

            {concluido == true ? 'tarefa concluida' : 
                <button onClick={e => concluirTarefa(e._id)}>
                    <BsPatchCheck/>
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
