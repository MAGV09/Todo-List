import './App.css';
import ProjectList from './components/projectList';
import ListInput from './components/addList';
import TaskList from './components/taskList';
import { useState } from 'react';
import { createProject } from './utils/dataFactory';

function App() {
  const [projects, setProjects] = useState([createProject('First Project')]);
  const [tasks, setTasks] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(0);
  const [currentProject, setCurrentProject] = useState({ id: '', list: [] });
  const [currentTask, setCurrentTask] = useState();
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <ProjectList
            projects={projects}
            setDialogOpen={setDialogOpen}
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
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
          />
          <ListInput
            type={'List'}
            projects={projects}
            setProjects={setProjects}
            dialogOpen={dialogOpen === 2}
            setDialogOpen={setDialogOpen}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </div>
    </>
  );
}

export default App;
