import '../../Styles/DaysWeek.css'
import api from '../../services/api.js'
import { BsFillTrashFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function DayTodayWeek({tipoTarefa,nomeTarefa,diaSemana,id}){

    function handleDrag(e){
        e.dataTransfer.set
    }

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

    return(
        <section className='dayTodayContainer'>
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
