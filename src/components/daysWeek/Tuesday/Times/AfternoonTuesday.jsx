import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from '../..'

export default function AftenoonTuesday(){

    const [tardeTerca,setTardeTerca] = useState([])

    useEffect(() => {
        async function lerTardeTerca(){
            const response = await api.get('/terca/periododia?periodoDia=tarde')
            const data = response.data

            setTardeTerca(data)
        }

        lerTardeTerca()

    },[])

    return(
        <ul className='afternoonList'>
            {tardeTerca.map(tarde => (
                <li key={tarde._id}>
                    <DayTodayWeek
                        id={tarde._id}
                        diaSemana='terca'
                        tipoTarefa={tarde.tipoTarefa}
                        nomeTarefa={tarde.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}