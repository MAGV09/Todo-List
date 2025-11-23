import { createList } from '../utils/dataFactory';
import Icon from '@mdi/react';
import {
  mdiCircleOutline,
  mdiPencilOutline,
  mdiTrashCanOutline,
  mdiPlus,
} from '@mdi/js';
import '../styles/taskList.css';
import ListInput from './addList';
import Test from './test';
function TaskList({ projects,setProjects ,tasks,setTasks,dialogOpen,setDialogOpen ,currentProject, setCurrentProject,currentTask,setCurrentTask}) {
    function handleAddTask(task){
  setDialogOpen(2)
}
function handleEdit(id){
setCurrentTask(id)
 setDialogOpen(3);
}
function handleDelete(id){
setTasks(
      tasks.filter((task) =>
        task.id !== id 
      ))

}
  return (
    <div className="hero">
      <h2>{projects.filter((project) => project.id===currentProject.id).map((project)=>project.title)}</h2>
      <div>
        {tasks.filter(task=>currentProject.list.includes(task.id)).map((task) => (
          <div className="task" key={task.id}>
            <Icon path={mdiCircleOutline} size={1} className="circle" onClick={()=>handleDelete(task.id,task)} />
            <div className="task-container">
              <p>{task.title}</p>
              <p>{task.description}</p>
              <div>
                <span>{task.dueDate}</span>
                <span> {task.priority}</span>
              </div>
            </div>
            <div className="icon-container">
              <Icon path={mdiPencilOutline} size={1} className="circle" onClick={(e)=>handleEdit(task.id)} />
              <Icon path={mdiTrashCanOutline} size={1} className="circle" onClick={()=>handleDelete(task.id,task)} />
            </div>
          </div>
        ))}
        <Test  projects={projects} setProjects={setProjects} dialogOpen={dialogOpen===3} setDialogOpen={setDialogOpen} tasks={tasks} setTasks={setTasks} currentTask ={currentTask} setCurrentTask={setCurrentTask}/>
      </div>

      <div className="add-list" onClick={handleAddTask} >
        <Icon path={mdiPlus} size={1.2} />
        <p>Add Task</p>
      </div>
    </div>
  );
}

export default TaskList;
