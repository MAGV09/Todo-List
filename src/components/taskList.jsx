import { createList } from '../utils/dataFactory';
import Icon from '@mdi/react';
import {
  mdiCircleOutline,
  mdiPencilOutline,
  mdiTrashCanOutline,
  mdiPlus,
} from '@mdi/js';
import '../styles/taskList.css';

function TaskList({ projects, tasks,setDialogOpen ,currentProject, setCurrentProject}) {
    function handleAddTask(){
  setDialogOpen(2)
}
console.log(currentProject)
  return (
    <div className="hero">
      <h2>{projects.filter((project) => project.id===currentProject.id).map((project)=>project.title)}</h2>
      <div>
        {tasks.filter(task=>currentProject.list.includes(task.id)).map((task) => (
          <div className="task" key={task.id}>
            <Icon path={mdiCircleOutline} size={1} className="circle" />
            <div className="task-container">
              <p>{task.title}</p>
              <p>{task.description}</p>
              <div>
                <span>{task.dueDate}</span>
                <span> {task.priority}</span>
              </div>
            </div>
            <div className="icon-container">
              <Icon path={mdiPencilOutline} size={1} className="circle" />
              <Icon path={mdiTrashCanOutline} size={1} className="circle" />
            </div>
          </div>
        ))}
      </div>
      <div className="add-list" onClick={handleAddTask} >
        <Icon path={mdiPlus} size={1.2} />
        <p>Add Task</p>
      </div>
    </div>
  );
}

export default TaskList;
