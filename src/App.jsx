import './App.css'
import ProjectList from './components/projectList'
import ListInput from './components/addList'
import TaskList from './components/taskList'
import { useState } from 'react'
import { createProject,createList } from './utils/dataFactory'

function App() {
const [projects,setProjects]= useState([createProject('First Project')])
const [tasks,setTasks] = useState([])
// createList('Finish the project','21/11','high','need to finish this project asap')
const [dialogOpen,setDialogOpen] = useState(0)
const [currentProject,setCurrentProject] = useState({id:'',list:[]})
// projects.forEach((project)=>{
//   if(project.title ==='First Project'){
//     project.todoList.push()
//   }
// })
// projects.forEach((project)=>{project.todoList.push(tasks[0].id)})
function temp(){
  projects.forEach((project)=>{project.todoList.push(tasks[0].id)
    console.log(project.todoList)
    tasks.forEach((task)=>{
      if(project.todoList.includes(task.id))
      console.log(task.title)
    })
  })
}
// temp()
  return (
    <>
 <div className='container'>
<div className='sidebar'>
 <ProjectList projects={projects} setProject={setProjects} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} currentProject={currentProject} setCurrentProject={setCurrentProject}/>
 <ListInput  projects={projects} setProjects={setProjects} dialogOpen={dialogOpen===1} setDialogOpen={setDialogOpen} tasks={tasks} setTasks={setTasks}/>
</div>

<div className='main'>
  <TaskList projects={projects} tasks={tasks} setDialogOpen={setDialogOpen} currentProject={currentProject} setCurrentProject={setCurrentProject}/>
<ListInput type={'List'} projects={projects} setProjects={setProjects} dialogOpen={dialogOpen===2} setDialogOpen={setDialogOpen} tasks={tasks} setTasks={setTasks}/>
</div>
 </div>
    </>
  )
}

export default App
