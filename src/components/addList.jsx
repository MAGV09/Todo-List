import { Fragment, useState } from 'react';
import '../styles/addList.css';
import { createProject, createList } from '../utils/dataFactory';
import { useRef } from 'react';

function Field({ fieldType, value, onChange, required, children }) {
  return (
    <div>
      <label>
        {children}
        <input
          type={fieldType}
          value={value}
          onChange={onChange}
          required={required}
        />
      </label>
    </div>
  );
}
function ListFields({ list, handleListChange }) {
  return (
    <Fragment>
      <Field
        fieldType="text"
        value={list.title}
        required={true}
        onChange={(e) => handleListChange(e, 'title')}
      >
        Title:
      </Field>

      <Field
        fieldType="text"
        value={list.description}
        required={false}
        onChange={(e) => handleListChange(e, 'description')}
      >
        Description:
      </Field>

      <Field
        fieldType="date"
        value={list.dueDate}
        required={true}
        onChange={(e) => handleListChange(e, 'dueDate')}
      >
        Due Date:
      </Field>

      <div>
        <label>
          Priority:
          <select
            value={list.priority}
            onChange={(e) => handleListChange(e, 'priority')}
            required
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
      </div>
    </Fragment>
  );
}
function ProjectFields({ projectTitle, setProjectTitle, handleProjectChange }) {
  return (
    <Field
      fieldType="text"
      value={projectTitle}
      required={true}
      onChange={(e) => handleProjectChange(e, setProjectTitle)}
    >
      Title:
    </Field>
  );
}
function ListInput({
  type,
  projects,
  setProjects,
  dialogOpen,
  setDialogOpen,
  tasks,
  setTasks,
}) {
  const [projectTitle, setProjectTitle] = useState('');
  const [list, setList] = useState({
    title: '',
    dueDate: '',
    priority: '',
    description: '',
    projectLink: '',
  });
  const dialogRef = useRef(null);

  function handleProjectChange(e, set) {
    set(e.target.value);
  }

  function handleListChange(e, val) {
    setList({
      ...list,
      [val]: e.target.value,
    });
  }
  function handleSubmit(e, formData, listData) {
    e.preventDefault();
    if (type !== 'List') {
      setProjects([...projects, createProject(formData)]);
    } else {
      const { title, dueDate, priority, description, projectLink } = listData;
      const newTask = createList(title, dueDate, priority, description);
      setTasks([...tasks, newTask]);
      const selectedProject = projects.find(
        (project) => project.id === projectLink
      );
      selectedProject.todoList.push(newTask.id);
    }
    resetFields();
  }
  function resetFields() {
    setProjectTitle('');
    setList({
      title: '',
      dueDate: '',
      priority: '',
      description: '',
      projectLink: '',
    });
  }
  const closeDialog = () => {
    dialogRef.current.close();
    setDialogOpen(0);
  };
 
  return (
    <dialog open={dialogOpen} ref={dialogRef}>
      <form
        method="dialog"
        onSubmit={(e) => handleSubmit(e, projectTitle, list)}
      >
        {type === 'List' ? (
          <div>
            <ListFields list={list} handleListChange={handleListChange} />
          </div>
        ) : (
          <div>
            <ProjectFields
              projectTitle={projectTitle}
              setProjectTitle={setProjectTitle}
              handleProjectChange={handleProjectChange}
            />
          </div>
        )}
        <div className="button-container">
          {type === 'List' && (
            <select
              value={list.projectLink}
              onChange={(e) => handleListChange(e, 'projectLink')}
              required
            >
              <option value="" disabled>
                Select Project
              </option>
              {projects.map((project) => (
                <option value={project.id} key={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
          )}
          <button onClick={closeDialog} type="reset">
            Cancel
          </button>
          <button onClick={closeDialog}>Add</button>
        </div>
      </form>
    </dialog>
  );
}

export default ListInput;
