import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function AftenoonThursday(){

    const [tardeQuinta,setTardeQuinta] = useState([])

    useEffect(() => {
        async function lerTardeQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeQuinta(data)
        }

        lerTardeQuinta()

        var data = new Date()
        let hora = data.getHours()
        let tarde = document.getElementById('tarde')
  
        if(hora >= 12 && hora <= 17){
            tarde.style.background = '#6ef02e'
            tarde.style.border = '1px solid #000'
            
        }else{
            tarde.style.background = 'tranparent'
            tarde.style.border = '1px solid #000'

        }

    },[])

    return(
        <ul className='afternoonList' id='tarde'>
            <h2 style={{
                textAlign:'center',
                fontSize:'2.5em',
                margin:'1rem 0 2rem 0'
            }}>
                Tarde
            </h2>
            {tardeQuinta.map(tarde => (
                <li key={tarde._id}>
                    <DayTodayWeek
                        id={tarde._id}
                        diaSemana='quinta'
                        tipoTarefa={tarde.tipoTarefa}
                        nomeTarefa={tarde.nomeTarefa}
                        concluido={tarde.concluido}
                    />
                </li>
            ))}
        </ul>
    )
}