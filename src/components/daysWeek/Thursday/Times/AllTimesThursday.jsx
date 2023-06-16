import { useEffect,useState } from "react"
import DayTodayWeek from "../.."
import api from "../../../../services/api"

export default function AllTimesThursday(){

    const [manhaQuinta,setManhaQuinta] = useState([])
    const [tardeQuinta,setTardeQuinta] = useState([])
    const [noiteQuinta,setNoiteQuinta] = useState([])

    useEffect(() => {
        async function lerManhaQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaQuinta(data)
        }

        async function lerTardeQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeQuinta(data)
        }

        async function lerNoiteQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteQuinta(data)
        }

        lerManhaQuinta()
        lerTardeQuinta()
        lerNoiteQuinta()

    },[])

    return(
        <div className="allTimes">

            <div className="timesWraper">
                <ul className="manha">
                    <h2>Manhã</h2>
                    {manhaQuinta.map(manha => (
                        <li key={manha._id}>
                            <DayTodayWeek
                                id={manha._id}
                                diaSemana='quinta'
                                tipoTarefa={manha.tipoTarefa}
                                nomeTarefa={manha.nomeTarefa}
                            />
                        </li>
                    ))}
                </ul>

                <ul className="tarde">
                    <h2>Tarde</h2>
                    {tardeQuinta.map(tarde => (
                        <li key={tarde._id}>
                            <DayTodayWeek
                                id={tarde._id}
                                diaSemana='quinta'
                                tipoTarefa={tarde.tipoTarefa}
                                nomeTarefa={tarde.nomeTarefa}
                            />
                        </li>
                    ))}
                </ul>
                
                <ul className="noite">
                    <h2>Noite</h2>
                    {noiteQuinta.map(noite => (
                        <li key={noite._id}>
                            <DayTodayWeek
                                id={noite._id}
                                diaSemana='quinta'
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