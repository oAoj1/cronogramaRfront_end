import './PagesDays.css'
import { Link } from 'react-router-dom'

export default function AllDaysWeek(){

    const diasSemana = [
        {
            dia:"Segunda-feira",
            url:"/segunda"
        },
        {
            dia:"Terça-feira",
            url:"/terca"
        },
        {
            dia:"Quarta-feira",
            url:"/quarta"
        },
        {
            dia:"Quinta-feira",
            url:"/quinta"
        },
        {
            dia:"Sexta-feira",
            url:"/sexta"
        }
    ]

    return(
        <div className='allDaysWeekContainer'>
            <ul className='allDaysWeekList'>
                {diasSemana.map((dias) => (
                    <li key={dias.dia}>
                        <Link to={dias.url}>
                            <button>
                                <h5>{dias.dia}</h5>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}