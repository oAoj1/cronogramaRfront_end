import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function NightTuesday(){

    const [noiteTerca,setNoiteTerca] = useState([])

    useEffect(() => {
        async function lerNoiteTerca(){
            const response = await api.get('/terca/periododia?periodoDia=noite')
            const data = response.data

            setNoiteTerca(data)
        }

        lerNoiteTerca()

    },[])

    return(
        <ul className='nightList'>
            {noiteTerca.map(noite => (
                <li key={noite._id}>
                    <DayTodayWeek
                        id={noite._id}
                        diaSemana='terca'
                        tipoTarefa={noite.tipoTarefa}
                        nomeTarefa={noite.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}