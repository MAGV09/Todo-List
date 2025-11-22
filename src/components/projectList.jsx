import { useState } from 'react';
import { createProject, createList } from '../utils/dataFactory.js';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus, mdiPlusCircle } from '@mdi/js';
import '../styles/todoList.css';

function ProjectList({ projects, setProject,dialogOpen,setDialogOpen ,currentProject,setCurrentProject}) {
  const [open, setOpen] = useState(false);
  function handleArrowClick() {
    open ? setOpen(false) : setOpen(true);
  }
function handleAddProject(){
  setDialogOpen(1)
}
function handleAddTask(){
  setDialogOpen(2)
}
function selectProject(project,setProject){
setCurrentProject({id:project.id,list:project.todoList})

}
  return (
    <div>
      <ul>
        <div className="add-task"  onClick={handleAddTask}>
          <Icon
            path={mdiPlusCircle}
            size={1.2}
           
          />
          <p>Add Task</p>
        </div>
        <div className="project-container">
          <h3 >My Projects</h3>

          <Icon
            path={mdiPlus}
            size={1}
            className="plus"
            onClick={handleAddProject}
          />
          <Icon
            path={mdiChevronDown}
            title="expand-collapse"
            size={1}
            horizontal
            vertical
            rotate={open ? 180 : 90}
            className="arrow"
            onClick={handleArrowClick}
          />
        </div>
        {open &&
          projects.map((project) => <li key={project.id} onClick={()=>selectProject(project,selectProject)}>{project.title}</li>)}
      </ul>
    </div>
  );
}

export default ProjectList;
