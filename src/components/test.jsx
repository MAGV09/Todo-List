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

function Test({
  type,
  projects,
  setProjects,
  dialogOpen,
  setDialogOpen,
  tasks,
  setTasks,
  currentTask,
  setCurrentTask,
}) {
  const promised = currentTask
    ? tasks.find((task) => task.id == currentTask)
    : {
        title: '',
        dueDate: '',
        priority: '',
        description: '',
      };
  const dialogRef = useRef(null);
  function handleListChange(e, val) {
    setTasks(
      tasks.map((task) =>
        task.id === currentTask ? { ...task, [val]: e.target.value } : task
      )
    );
    
  }
  function handleSubmit(e, formData, listData) {
    e.preventDefault();
    setCurrentTask(0)
  }

  const closeDialog = () => {
    dialogRef.current.close();
    setDialogOpen(0);
  };

  return (
    <dialog open={dialogOpen} ref={dialogRef}>
      <form method="dialog" onSubmit={(e) => handleSubmit(e, promised)}>
        <div>
          <ListFields list={promised} handleListChange={handleListChange} />
        </div>

        <div className="button-container">
          <button onClick={closeDialog} type="reset">
            Cancel
          </button>
          <button onClick={closeDialog}>Add</button>
        </div>
      </form>
    </dialog>
  );
}
export default Test;
