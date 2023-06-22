import DayTodayWeek from '../..'
import { useEffect,useState,useRef } from "react"
import api from "../../../../services/api"
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'

export default function AllTimesWednesday(){

    const draggableRef = useRef(null)
    const innerRef = useRef(null)
    const [manhaQuarta,setManhaQuarta] = useState([])
    const [tardeQuarta,setTardeQuarta] = useState([])
    const [noiteQuarta,setNoiteQuarta] = useState([])

    useEffect(() => {
        async function lerManhaQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaQuarta(data)
        }

        async function lerTardeQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeQuarta(data)
        }

        async function lerNoiteQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteQuarta(data)
        }

        lerManhaQuarta()
        lerTardeQuarta()
        lerNoiteQuarta()

    },[])

    return(
        <div className="allTimes">
            <div className="timesWraper">

                <ul className="manha">
                    <h2>Manhã</h2>

                    {manhaQuarta.map((manha,index) => (
                        <li key={manha._id}>
                            <DayTodayWeek
                                id={manha._id}
                                diaSemana='quarta'
                                tipoTarefa={manha.tipoTarefa}
                                nomeTarefa={manha.nomeTarefa}
                                concluido={manha.concluido}
                            />
                        </li>
                    ))}              
                </ul>

                <ul className="tarde">
                    <h2>Tarde</h2>
                    {tardeQuarta.map(tarde => (
                        <li key={tarde._id}>
                            <DayTodayWeek
                                id={tarde._id}
                                diaSemana='quarta'
                                tipoTarefa={tarde.tipoTarefa}
                                nomeTarefa={tarde.nomeTarefa}
                                concluido={tarde.concluido}
                            />
                        </li>
                    ))}
                </ul>
                
                <ul className="noite">
                    <h2>Noite</h2>
                    {noiteQuarta.map(noite => (
                        <li key={noite._id}>
                            <DayTodayWeek
                                id={noite._id}
                                diaSemana='quarta'
                                tipoTarefa={noite.tipoTarefa}
                                nomeTarefa={noite.nomeTarefa}
                                concluido={noite.concluido}
                            />
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}