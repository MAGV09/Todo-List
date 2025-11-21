import './App.css'
import ProjectList from './components/projectList'
import ListInput from './components/addList'
import TaskList from './components/taskList'
import { useState } from 'react'
import { createProject,createList } from './utils/dataFactory'

function App() {
const [projects,setProjects]= useState([createProject('First Project')])
const [dialogOpen,setDialogOpen] = useState(0)
  return (
    <>
 <div className='container'>
<div className='sidebar'>
 <ProjectList projects={projects} setProject={setProjects} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}/>
 <ListInput  projects={projects} setProjects={setProjects} dialogOpen={dialogOpen===1} setDialogOpen={setDialogOpen}/>
</div>

<div className='main'>
  <TaskList/>
<ListInput type={'List'} projects={projects} setProjects={setProjects} dialogOpen={dialogOpen===2} setDialogOpen={setDialogOpen}/>
</div>
 </div>
    </>
  )
}

export default App
