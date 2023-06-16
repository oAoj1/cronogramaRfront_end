import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import DayToday from './pages/DayToday'

import Monday from './components/daysWeek/Monday'
import AddTaskMonday from './components/daysWeek/Monday/Task/AddTaskMonday'
import EditTaskMonday from './components/daysWeek/Monday/Task/EditTaskMonday'
import AddAnnotationsMonday from './components/daysWeek/Monday/Annotations/AddAnnotationsMonday'
import EditAnnotationsMonday from './components/daysWeek/Monday/Annotations/EditAnnotationsMonday'

import Tuesday from './components/daysWeek/Tuesday'
import AddTaskTuesday from './components/daysWeek/Tuesday/Task/AddTaskTuesday'
import EditTaskTuesday from './components/daysWeek/Tuesday/Task/EditTaskTuesday'
import AddAnnotationsTuesday from './components/daysWeek/Tuesday/Annotations/AddAnnotationsTuesday'
import EditAnnotationsTuesday from './components/daysWeek/Tuesday/Annotations/EditAnnotationsTuesday'

import Wednesday from './components/daysWeek/Wednesday'
import AddTaskWednesday from './components/daysWeek/Wednesday/Task/AddTaskWedsneday'
import EditTaskWednesday from './components/daysWeek/Wednesday/Task/EditTaskWednesday'
import AddAnnotationsWednesday from './components/daysWeek/Wednesday/Annotations/AddAnnotationsWednesday'
import EditAnnotationsWednesday from './components/daysWeek/Wednesday/Annotations/EditAnnotationsWednesday'

import Thursday from './components/daysWeek/Thursday'
import AddTaskThursday from './components/daysWeek/Thursday/Task/AddTaskThursday'
import EditTaskThursday from './components/daysWeek/Thursday/Task/EditTaskThursday'
import AddAnnotationsThursday from './components/daysWeek/Thursday/Annotations/AddAnnotationsThursday'
import EditAnnotationsThursday from './components/daysWeek/Thursday/Annotations/EditAnnotationsThursday'

import Friday from './components/daysWeek/Friday'
import AddTaskFriday from './components/daysWeek/Friday/Task/AddTaskFriday'
import EditTaskFriday from './components/daysWeek/Friday/Task/EditTaskFriday'
import AddAnnotationsFriday from './components/daysWeek/Friday/Annotations/AddAnnotationsFriday'
import EditAnnotationsFriday from './components/daysWeek/Friday/Annotations/EditAnnotationsFriday'

export default function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={<DayToday/>}/>

          {/* segunda */}
          <Route path='/segunda' element={<Monday/>}/>
          <Route path='/segunda/adicionar' element={<AddTaskMonday/>}/>
          <Route path='/segunda/:id' element={<EditTaskMonday/>}/>
          <Route path='/segunda/anotacoes' element={<AddAnnotationsMonday/>}/>
          <Route path='/segunda/anotacoes/:id' element={<EditAnnotationsMonday/>}/>

          {/* terça */}
          <Route path='/terca' element={<Tuesday/>}/>
          <Route path='/terca/adicionar' element={<AddTaskTuesday/>}/>
          <Route path='/terca/:id' element={<EditTaskTuesday/>}/>
          <Route path='/terca/anotacoes' element={<AddAnnotationsTuesday/>}/>
          <Route path='/terca/anotacoes/:id' element={<EditAnnotationsTuesday/>}/>

          {/* quarta */}
          <Route path='/quarta' element={<Wednesday/>}/>
          <Route path='/quarta/adicionar' element={<AddTaskWednesday/>}/>
          <Route path='/quarta/:id' element={<EditTaskWednesday/>}/>
          <Route path='/quarta/anotacoes' element={<AddAnnotationsWednesday/>}/>
          <Route path='/quarta/anotacoes/:id' element={<EditAnnotationsWednesday/>}/>

          {/* quinta */}
          <Route path='/quinta' element={<Thursday/>}/>
          <Route path='/quinta/adicionar' element={<AddTaskThursday/>}/>
          <Route path='/quinta/:id' element={<EditTaskThursday/>}/>
          <Route path='/quinta/anotacoes' element={<AddAnnotationsThursday/>}/>
          <Route path='/quinta/anotacoes/:id' element={<EditAnnotationsThursday/>}/>

          {/* sexta */}
          <Route path='/sexta' element={<Friday/>}/>
          <Route path='/sexta/adicionar' element={<AddTaskFriday/>}/>
          <Route path='/sexta/:id' element={<EditTaskFriday/>}/>
          <Route path='/sexta/anotacoes' element={<AddAnnotationsFriday/>}/>
          <Route path='/sexta/anotacoes/:id' element={<EditAnnotationsFriday/>}/>

        </Routes>
      </Router>
    </div>
  ) 
}