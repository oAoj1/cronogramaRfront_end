import DayTodayWeek from '../..'
import { useEffect,useState,useRef } from "react"
import api from "../../../../services/api"

export default function AllTimesWednesday(){

    const [manhaQuarta,setManhaQuarta] = useState([])
    const [tardeQuarta,setTardeQuarta] = useState([])
    const [noiteQuarta,setNoiteQuarta] = useState([])
    const [periodoAgora,setPeriodoAgora] = useState('')

    useEffect(() => {
        async function lerManhaQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=manha')
            const data = response.data
            
            setManhaQuarta(data)
        }

        async function lerTardeQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=tarde')
            const data = response.data

            setTardeQuarta(data)
        }

        async function lerNoiteQuarta(){
            const response = await api.get('/quarta/periododia?periodoDia=noite')
            const data = response.data

            setNoiteQuarta(data)
        }

        lerManhaQuarta()
        lerTardeQuarta()
        lerNoiteQuarta()

    },[])

    useEffect(() => {
        var data = new Date()

        async function lerPeriodoAgora(){

            let hora = data.getHours()
            var periodoAgora = ''

            if(hora >= 0 && hora <= 5){
                periodoAgora = 'Madrugada'
                
            }else if(hora >= 6 && hora <= 11){
                periodoAgora = 'Manhã'
                
            }else if(hora >= 12 && hora <= 17){
                periodoAgora = 'Tarde'

            }else if(hora >= 18 && hora <= 23){
                periodoAgora = 'Noite'

            }

            setPeriodoAgora(periodoAgora)

        }

        lerPeriodoAgora()

        let manha = document.getElementById('manha')
        let tarde = document.getElementById('tarde')
        let noite = document.getElementById('noite')

        if(periodoAgora == 'Manhã'){
            manha.style.background = '#6ef02e'
            manha.style.border = '1px solid #000'

            tarde.style.background = 'transparent'
            noite.style.background = 'transparent'

        }else if(periodoAgora == 'Tarde'){
            tarde.style.background = '#6ef02e'
            tarde.style.border = '1px solid #000'

            manha.style.background = 'trasparent'
            noite.style.background = 'transparent'

        }else if(periodoAgora == 'Noite'){
            noite.style.background = '#6ef02e'
            noite.style.border = '1px solid #fff'
            
            manha.style.background = 'trasparent'
            tarde.style.background = 'transparent'

        }else{
            manha.style.background = 'transparent'
            tarde.style.background = 'transparent'
            noite.style.background = 'transparent'

        }

    },[periodoAgora])

    return(
        <div className="allTimes">
            <div className="timesWraper">

                <ul className="manha" id='manha'>
                    <h2>Manhã</h2>

                    {manhaQuarta.map((manha,index) => (
                        <li key={manha._id}>
                            <DayTodayWeek
                                id={manha._id}
                                diaSemana='quarta'
                                tipoTarefa={manha.tipoTarefa}
                                nomeTarefa={manha.nomeTarefa}
                                concluido={manha.concluido}
                            />
                        </li>
                    ))}              
                </ul>

                <ul className="tarde" id='tarde'>
                    <h2>Tarde</h2>
                    {tardeQuarta.map(tarde => (
                        <li key={tarde._id}>
                            <DayTodayWeek
                                id={tarde._id}
                                diaSemana='quarta'
                                tipoTarefa={tarde.tipoTarefa}
                                nomeTarefa={tarde.nomeTarefa}
                                concluido={tarde.concluido}
                            />
                        </li>
                    ))}
                </ul>
                
                <ul className="noite" id='noite'>
                    <h2>Noite</h2>
                    {noiteQuarta.map(noite => (
                        <li key={noite._id}>
                            <DayTodayWeek
                                id={noite._id}
                                diaSemana='quarta'
                                tipoTarefa={noite.tipoTarefa}
                                nomeTarefa={noite.nomeTarefa}
                                concluido={noite.concluido}
                            />
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}