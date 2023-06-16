import '../../../Styles/DaysWeek.css'
import '../../../Styles/Annotations.css'
import '../../../Styles/Tasks.css'
import '../../../Styles/Times.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
import AllTimesMonday from "./Times/AllTimesMonday.jsx"
import MorningMonday from "./Times/MorningMonday.jsx"
import AfternoonMonday from './Times/AfternoonMonday.jsx'
import NightMonday from './Times/NightMonday.jsx'

export default function Monday(){

    const filtragemPeriodo = [
        'dia todo',
        'manha',
        'tarde',
        'noite'
    ]

    const [valorDia,setValorDia] = useState('')
    
    return(
        <section className="dayContainer">
            <div className='optionsContainer'>

                <div className="filterContainer">
                    <select onChange={valor => setValorDia(valor.target.value)}>
                        {filtragemPeriodo.map(filtros => (
                            <option key={filtros}>
                                {filtros}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className='addTaskContainer'>
                    <Link to='/segunda/adicionar'>
                        <button>Adicionar tarefa</button>
                    </Link>
                </div>

            </div>
            
            <div className="periodsContainer">
                {valorDia == 'manha' ? <MorningMonday/> :
                valorDia == 'tarde' ? <AfternoonMonday/> :
                valorDia == 'noite' ? <NightMonday/> :
                valorDia == 'dia todo' || valorDia == '' ?
                <AllTimesMonday/> : ''}
            </div>
 
        </section>
    )
}