import './App.css';
import ProjectList from './components/projectList';
import ListInput from './components/addList';
import TaskList from './components/taskList';
import { useState } from 'react';
import { createProject, createList } from './utils/dataFactory';

function App() {
  const [projects, setProjects] = useState([createProject('First Project')]);
  const [tasks, setTasks] = useState([]);
  // createList('Finish the project','21/11','high','need to finish this project asap')
  const [dialogOpen, setDialogOpen] = useState(0);
  const [currentProject, setCurrentProject] = useState({ id: '', list: [] });
  const [currentTask, setCurrentTask] = useState();
  const [editableTask, setEditableTask] = useState({
    title: '',
    dueDate: '',
    priority: '',
    description: '',
  });

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <ProjectList
            projects={projects}
            setProject={setProjects}
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          />
          <ListInput
            projects={projects}
            setProjects={setProjects}
            dialogOpen={dialogOpen === 1}
            setDialogOpen={setDialogOpen}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>

        <div className="main">
          <TaskList
            projects={projects}
            setProject={setProjects}
            tasks={tasks}
            setTasks={setTasks}
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
            editableTask={editableTask}
            setEditableTask={setEditableTask}
          />
          <ListInput
            type={'List'}
            projects={projects}
            setProjects={setProjects}
            dialogOpen={dialogOpen === 2}
            setDialogOpen={setDialogOpen}
            tasks={tasks}
            setTasks={setTasks}
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
          />
          {/* <ListInput type={'Update'} projects={projects} setProjects={setProjects} dialogOpen={dialogOpen===3} setDialogOpen={setDialogOpen} tasks={tasks} setTasks={setTasks} currentTask ={currentTask} setCurrentTask={setCurrentTask}/> */}
        </div>
      </div>
    </>
  );
}

export default App;
