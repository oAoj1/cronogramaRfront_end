import './InfoDay.css'
import { useEffect,useState } from 'react'
import api from '../../services/api.js'

export default function InfoDay(){

    const [dia,setDia] = useState('')
    const [data,setData] = useState('')
    const [periodoAgora,setPeriodoAgora] = useState('')

    useEffect(() => {

        async function lerDia(){
          const response = await api.get('/tempo/dia')
          const data = response.data

          setDia(data)
        }
    
        async function lerData(){
          const response = await api.get('/tempo/data')
          const data = response.data

          setData(data)
        }
    
        async function lerPeriodoAgora(){
          const response = await api.get('/tempo/periodoagora')
          const data = response.data

          setPeriodoAgora(data)
        }
    
        lerDia()
        lerData()
        lerPeriodoAgora()
    
      },[])

    return(
        <div className="infoDay">
            <h1 className='day'>{dia}</h1>

            <div className='dataPeriodWraper'>
                <h4 className='data'>{data}</h4>
                <h2 className='periodNow'>{periodoAgora}</h2>
            </div>
        </div>
    )
}