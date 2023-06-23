import api from "../../../../services/api"
import { useEffect,useState } from "react"
import DayTodayWeek from "../.."

export default function NightFriday(){

    const [noiteSexta,setNoiteSexta] = useState([])

    useEffect(() => {
        async function lerNoiteSexta(){
            const response = await api.get('/sexta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteSexta(data)
        }

        lerNoiteSexta()

        var data = new Date()
        let hora = data.getHours()
        let noite = document.getElementById('noite')
  
        if(hora >= 18 && hora <= 23){
            noite.style.background = '#6ef02e'
            noite.style.border = '1px solid #fff'
            
        }else{
            noite.style.background = 'tranparent'
            noite.style.border = '1px solid #000'

        }

    },[])

    return(
        <ul className='nightList' id='noite'>
            <h2 style={{
                textAlign:'center',
                fontSize:'2.5em',
                margin:'1rem 0 2rem 0'
            }}>
                Noite
            </h2>
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
    )
}