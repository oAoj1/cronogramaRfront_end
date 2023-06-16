import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from '../..'

export default function MorningTuesday(){

    const [manhaTerca,setManhaTerca] = useState([])

    useEffect(() => {
        async function lerManhaTerca(){
            const response = await api.get('/terca/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaTerca(data)
        }

        lerManhaTerca()

    },[])

    return(
        <ul className='morningList'>
            {manhaTerca.map(manha => (
                <li key={manha._id}>
                    <DayTodayWeek
                        id={manha._id}
                        diaSemana='terca'
                        tipoTarefa={manha.tipoTarefa}
                        nomeTarefa={manha.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}