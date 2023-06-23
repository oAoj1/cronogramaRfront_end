import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function AftenoonFriday(){

    const [tardeSexta,setTardeSexta] = useState([])

    useEffect(() => {
        async function lerTardeSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeSexta(data)
        }

        lerTardeSexta()

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
    )
}