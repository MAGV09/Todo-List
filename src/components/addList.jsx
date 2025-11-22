import { useState } from 'react';
import '../styles/addList.css';
import { createProject, createList } from '../utils/dataFactory';
import { useRef } from 'react';

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
    type !== 'List' && setProjects([...projects, createProject(formData)]);
    const { title, dueDate, priority, description } = listData;
    type === 'List' &&
      setTasks([...tasks, createList(title, dueDate, priority, description)]);
    resetFields();
  }
  function resetFields() {
    setProjectTitle('');
    setList({ title: '', dueDate: '', priority: '', description: '' });
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
            <div>
              <label>
                Title:
                <input
                  type="text"
                  value={list.title}
                  onChange={(e) => handleListChange(e, 'title')}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Description:
                <input
                  type="text"
                  value={list.description}
                  onChange={(e) => handleListChange(e, 'description')}
                />
              </label>
            </div>

            <div>
              <label>
                Due Date:
                <input
                  type="date"
                  value={list.dueDate}
                  onChange={(e) => handleListChange(e, 'dueDate')}
                  required
                />
              </label>
            </div>

            <div>
              <select
                name="priority"
                value={list.priority}
                onChange={(e) => handleListChange(e, 'priority')}
                required
              >
                <option value="">Select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        ) : (
          <div>
            <label>
              Title:
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => handleProjectChange(e, setProjectTitle)}
                required
              />
            </label>
          </div>
        )}
        <div className="button-container">
          {type === 'List' && (
            <select>
              <option value="low">Select Project</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          )}
          <button onClick={closeDialog} type='reset'>Cancel</button>
          <button onClick={closeDialog}>Add</button>
        </div>
      </form>
    </dialog>
  );
}

export default ListInput;
