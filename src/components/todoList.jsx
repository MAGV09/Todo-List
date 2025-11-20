import { useState } from 'react';
import { createProject, createList } from '../utils/dataFactory.js';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus } from '@mdi/js';
import '../styles/todoList.css';

const firstProject = createProject('firstProject');

function TodoList() {
  const [projects, setProjects] = useState([firstProject]);
  const [open, setOpen] = useState(false);

  function handleClick() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div>
      <ul>
        <div className="project-container" onClick={handleClick}>
          <h3>My Projects</h3>

          <Icon
            path={mdiPlus}
            size={1}
            className="plus"
            onClick={() => console.log('oi')}
          />
          <Icon
            path={mdiChevronDown}
            title="expand-collapse"
            size={1}
            horizontal
            vertical
            rotate={open ? 180 : 90}
            className="arrow"
          />
        </div>
        {open && projects.map((project) => <li key={project.id}>{project.title}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
