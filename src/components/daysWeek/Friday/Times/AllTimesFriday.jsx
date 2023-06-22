import api from "../../../../services/api"
import { useEffect,useState } from "react"
import DayTodayWeek from "../.."

export default function AllTimesFriday(){

    const [manhaSexta,setManhaSexta] = useState([])
    const [tardeSexta,setTardeSexta] = useState([])
    const [noiteSexta,setNoiteSexta] = useState([])

    useEffect(() => {
        async function lerManhaSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaSexta(data)
        }

        async function lerTardeSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeSexta(data)
        }

        async function lerNoiteSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteSexta(data)
        }

        lerManhaSexta()
        lerTardeSexta()
        lerNoiteSexta()

    },[])

    return(
        <div className="allTimes">

            <div className="timesWraper">
                <ul className="manha">
                    <h2>Manhã</h2>
                    {manhaSexta.map(manha => (
                        <li key={manha._id}>
                            <DayTodayWeek
                                id={manha._id}
                                diaSemana='sexta'
                                tipoTarefa={manha.tipoTarefa}
                                nomeTarefa={manha.nomeTarefa}
                                concluido={manha.concluido}
                            />
                        </li>
                    ))}
                </ul>

                <ul className="tarde">
                    <h2>Tarde</h2>
                    {tardeSexta.map(tarde => (
                        <li key={tarde._id}>
                            <DayTodayWeek
                                id={tarde._id}
                                diaSemana='sexta'
                                tipoTarefa={tarde.tipoTarefa}
                                nomeTarefa={tarde.nomeTarefa}
                                concluido={tarde.concluido}
                            />
                        </li>
                    ))}
                </ul>
                
                <ul className="noite">
                    <h2>Noite</h2>
                    {noiteSexta.map(noite => (
                        <li key={noite._id}>
                            <DayTodayWeek
                                id={noite._id}
                                diaSemana='sexta'
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