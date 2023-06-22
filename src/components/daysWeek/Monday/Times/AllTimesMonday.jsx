import api from "../../../../services/api"
import DayTodayWeek from '../..'
import { useEffect,useState } from "react"

export default function AllTimesMonday(){

    const [manhaSegunda,setManhaSegunda] = useState([])
    const [tardeSegunda,setTardeSegunda] = useState([])
    const [noiteSegunda,setNoiteSegunda] = useState([])

    useEffect(() => {
        async function lerManhaSegunda(){
            const response = await api.get('/segunda/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaSegunda(data)
        }

        async function lerTardeSegunda(){
            const response = await api.get('/segunda/periododia?periodoDia=tarde')
            const data = response.data

            setTardeSegunda(data)
        }

        async function lerNoiteSegunda(){
            const response = await api.get('/segunda/periododia?periodoDia=noite')
            const data = response.data

            setNoiteSegunda(data)
        }

        lerManhaSegunda()
        lerTardeSegunda()
        lerNoiteSegunda()

    },[])

    return(
        <div className="allTimes">

            <div className="timesWraper">
                <ul className="manha" >
                    <h2>Manhã</h2>
                    {manhaSegunda.map((manha) => (
                        <li key={manha._id} >
                            <DayTodayWeek
                                id={manha._id}
                                diaSemana='segunda'
                                tipoTarefa={manha.tipoTarefa}
                                nomeTarefa={manha.nomeTarefa}
                                concluido={manha.concluido}
                            />
                        </li>

                    ))}
                </ul>

                <ul className="tarde">
                    <h2>Tarde</h2>
                    {tardeSegunda.map(tarde => (
                        <li key={tarde._id}>
                            <DayTodayWeek
                                id={tarde._id}
                                diaSemana='segunda'
                                tipoTarefa={tarde.tipoTarefa}
                                nomeTarefa={tarde.nomeTarefa}
                            />
                        </li>
                    ))}
                </ul>
                
                <ul className="noite">
                    <h2>Noite</h2>
                    {noiteSegunda.map(noite => (
                        <li key={noite._id}>
                            <DayTodayWeek
                                id={noite._id}
                                diaSemana='segunda'
                                tipoTarefa={noite.tipoTarefa}
                                nomeTarefa={noite.nomeTarefa}
                            />
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}