import './InfoDay.css'

import { useEffect,useState } from 'react'
import api from '../../services/api.js'

import { AiOutlineCalendar } from 'react-icons/ai'

import { BsSunFill } from 'react-icons/bs'
import { WiSunset } from 'react-icons/wi'
import { BsFillMoonFill } from 'react-icons/bs'
import { GiNightSleep } from 'react-icons/gi'

export default function InfoDay(){

    const [dia,setDia] = useState('')
    const [data,setData] = useState('')
    const [periodoAgora,setPeriodoAgora] = useState('')
    const [icon,setIcon] = useState('')

    useEffect(() => {
        var data = new Date()

        async function lerDia(){
            let diaHoje = data.getDay()

            if(diaHoje == 0){
                diaHoje = 'Domingo'
            }
            if(diaHoje == 1){
                diaHoje = 'Segunda-feira'
            }
            if(diaHoje == 2){
                diaHoje = 'Terça-feira'
            }
            if(diaHoje == 3){
                diaHoje = 'Quarta-feira'
            }
            if(diaHoje == 4){
                diaHoje = 'Quinta-feira'
            }
            if(diaHoje == 5){
                diaHoje = 'Sexta-feira'
            }
            if(diaHoje == 6){
                diaHoje = 'Sábado'
            }

            setDia(diaHoje)
        }
    
        async function lerData(){
            let dia = String(data.getDate()).padStart(2,'0')
            let mes = String(data.getMonth() + 1).padStart(2,'0')

            let dataCompleta = `${dia}/${mes}`

            setData(dataCompleta)
        }
    
        async function lerPeriodoAgora(){
            let hora = data.getHours()
            var periodoAgora = ''

            if(hora >= 0 && hora <= 5){
                periodoAgora = 'Madrugada'
                setIcon(<GiNightSleep/>)
                
            }else if(hora >= 6 && hora <= 11){
                periodoAgora = 'Manhã'
                setIcon(<BsSunFill/>)
                
            }else if(hora >= 12 && hora <= 17){
                periodoAgora = 'Tarde'
                setIcon(<WiSunset/>)

            }else if(hora >= 18 && hora <= 23){
                periodoAgora = 'Noite'
                setIcon(<BsFillMoonFill/>)

            }

            setPeriodoAgora(periodoAgora)
        }
    
        lerDia()
        lerData()
        lerPeriodoAgora()
    
      },[])

    return(
        <div className="infoDay">
            <div 
                className='infoWraper' 
                style={{
                    display:'flex',
                    margin:'1rem 0',
                }}
            >
                <h1 className='day'>{dia}</h1>

                <div className='dataPeriodWraper'>
                    <h4 className='data'>
                        {data}
                        <AiOutlineCalendar/>
                    </h4>
                    <h2 className='periodNow'>
                        {periodoAgora}
                        {icon}
                    </h2>
                </div>
            </div>
        </div>
    )
}