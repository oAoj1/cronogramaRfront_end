import DayTodayWeek from "../.."
import api from "../../../../services/api"
import { useEffect,useState } from "react"

export default function MorningThursday(){

    const [manhaQuinta,setManhaQuinta] = useState([])

    useEffect(() => {
        async function lerManhaQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaQuinta(data)
        }

        lerManhaQuinta()

    },[])

    return(
        <ul className='morningList'>
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
    )
}