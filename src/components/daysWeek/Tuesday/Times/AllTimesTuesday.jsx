import { useEffect,useState } from "react"
import DayTodayWeek from '../..'
import api from '../../../../services/api'

export default function AllTimesTuesday(){

    const [manhaTerca,setManhaTerca] = useState([])
    const [tardeTerca,setTardeTerca] = useState([])
    const [noiteTerca,setNoiteTerca] = useState([])

    useEffect(() => {
        async function lerManhaTerca(){
            const response = await api.get('/terca/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaTerca(data)
        }

        async function lerTardeTerca(){
            const response = await api.get('/terca/periododia?periodoDia=tarde')
            const data = response.data

            setTardeTerca(data)
        }

        async function lerNoiteTerca(){
            const response = await api.get('/terca/periododia?periodoDia=noite')
            const data = response.data

            setNoiteTerca(data)
        }

        lerManhaTerca()
        lerTardeTerca()
        lerNoiteTerca()

    },[])

    return(
        <div className="allTimes">

            <div className="timesWraper">
                <ul className="manha">
                    <h2>Manhã</h2>
                    {manhaTerca.map(manha => (
                        <li key={manha._id}>
                            <DayTodayWeek
                                id={manha._id}
                                diaSemana='terca'
                                tipoTarefa={manha.tipoTarefa}
                                nomeTarefa={manha.nomeTarefa}
                                concluido={manha.concluido}
                            />
                        </li>
                    ))}
                </ul>

                <ul className="tarde">
                    <h2>Tarde</h2>
                    {tardeTerca.map(tarde => (
                        <li key={tarde._id}>
                            <DayTodayWeek
                                id={tarde._id}
                                diaSemana='terca'
                                tipoTarefa={tarde.tipoTarefa}
                                nomeTarefa={tarde.nomeTarefa}
                                concluido={tarde.concluido}
                            />
                        </li>
                    ))}
                </ul>
                
                <ul className="noite">
                    <h2>Noite</h2>
                    {noiteTerca.map(noite => (
                        <li key={noite._id}>
                            <DayTodayWeek
                                id={noite._id}
                                diaSemana='terca'
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