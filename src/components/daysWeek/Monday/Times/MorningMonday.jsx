import api from "../../../../services/api"
import { useEffect,useState } from "react"
import DayTodayWeek from '../..'

export default function MorningMonday(){

    const [manhaSegunda,setManhaSegunda] = useState([])

    useEffect(() => {
        async function lerManhaSegunda(){
            const response = await api.get('/segunda/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaSegunda(data)
        }

        lerManhaSegunda()

    },[])

    return(
        <ul className='morningList'>
            {manhaSegunda.map(manha => (
                <li key={manha._id}>
                    <DayTodayWeek
                        id={manha._id}
                        diaSemana='segunda'
                        tipoTarefa={manha.tipoTarefa}
                        nomeTarefa={manha.nomeTarefa}
                    />
                </li>
            ))}
        </ul>
    )
}