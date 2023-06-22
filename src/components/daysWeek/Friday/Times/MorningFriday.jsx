import api from "../../../../services/api"
import { useEffect,useState } from "react"
import DayTodayWeek from "../.."

export default function MorningFriday(){

    const [manhaSexta,setManhaSexta] = useState([])

    useEffect(() => {
        async function lerManhaSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaSexta(data)
        }

        lerManhaSexta()

    },[])

    return(
        <ul className='morningList'>
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
    )
}