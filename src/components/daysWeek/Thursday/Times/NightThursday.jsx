import { useEffect,useState } from "react"
import api from "../../../../services/api"
import DayTodayWeek from "../.."

export default function NightThursday(){

    const [noiteQuinta,setNoiteQuinta] = useState([])

    useEffect(() => {
        async function lerNoiteQuinta(){
            const response = await api.get('/quinta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteQuinta(data)
        }

        lerNoiteQuinta()

        var data = new Date()
        let hora = data.getHours()
        let tarde = document.getElementById('tarde')
  
        if(hora >= 18 && hora <= 23){
            noite.style.background = '#6ef02e'
            tarde.style.border = '1px solid #000'
            
        }else{
            noite.style.background = 'tranparent'
            noite.style.border = '1px solid #fff'

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
    )
}