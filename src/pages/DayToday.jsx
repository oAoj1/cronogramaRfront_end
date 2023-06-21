
import './PagesDays.css'
import { useEffect, useState } from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../auth/login.jsx'
import LogoutButton from '../auth/logout.jsx'

import AllDaysWeek from './AllDaysWeek.jsx'

import api from '../services/api'
import InfoDay from '../components/infoDay/index.jsx'

import Monday from '../components/daysWeek/Monday/index.jsx'
import AnnotationsMonday from '../components/daysWeek/Monday/Annotations/AnnotationsMonday.jsx'

import Tuesday from '../components/daysWeek/Tuesday/index.jsx'
import AnnotationsTuesday from '../components/daysWeek/Tuesday/Annotations/AnnotationsTuesday.jsx'

import Wednesday from '../components/daysWeek/Wednesday/index.jsx'
import AnnotationsWednesday from '../components/daysWeek/Wednesday/Annotations/AnnotationsWednesday'

import Thursday from '../components/daysWeek/Thursday/index.jsx'
import AnnotationsThursday from '../components/daysWeek/Thursday/Annotations/AnnotationsThursday.jsx'

import Friday from '../components/daysWeek/Friday/index.jsx'
import AnnotationsFriday from '../components/daysWeek/Friday/Annotations/AnnotationsFriday.jsx'

export default function DayToday(){

    const { isAuthenticated, isLoading } = useAuth0();
    
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    const [dia,setDia] = useState('')
    

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

        lerDia()

    },[])

    return(
        <div>
            <InfoDay/>

            {isAuthenticated ? 
                <div>
                    <section className="dayTodayContainer">
                        <div className='daysFormat'>
                            {dia == 'Segunda-feira' ? <Monday/> :
                            dia == 'Terça-feira' ? <Tuesday/> : 
                            dia == 'Quarta-feira' ? <Wednesday/> : 
                            dia == 'Quinta-feira' ? <Thursday/>  : 
                            dia == 'Sexta-feira' ? <Friday/> : 
                            'Descansar'} 

                        </div>

                        <div className='annotationsFormat'>
                            {dia == 'Segunda-feira' ? <AnnotationsMonday/> :
                            dia == 'Terça-feira' ? <AnnotationsTuesday/> : 
                            dia == 'Quarta-feira' ? <AnnotationsWednesday/> : 
                            dia == 'Quinta-feira' ? <AnnotationsThursday/>  : 
                            dia == 'Sexta-feira' ? <AnnotationsFriday/> : 
                            ' '} 
                        </div>

                    </section> 
                    <AllDaysWeek/>

                </div>: 
                    <div className='logContainer'>
                        <LoginButton/>
                    </div>}

            <div className='logContainer'>
                <LogoutButton/>
            </div>

        </div>
    )
}