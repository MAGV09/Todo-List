import { useState } from 'react';
import '../styles/addList.css'
function ListInput({ type }) {
  const [projectTitle, setProjectTitle] = useState('');
  const [list, setList] = useState({
    title: '',
    dueDate: '',
    priority: '',
    description: '',
  });
  function handleProjectChange(e, set) {
    set(e.target.value);
  }

  function handleListChange(e, val) {
    setList({
      ...list,
      [val]: e.target.value,
    });
  }
  return (
    <dialog open={true}>
      <form method="dialog" onSubmit={(e)=> e.preventDefault()}>
        {type === 'project' && (
          <div>
            <label>
              Title:
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => handleProjectChange(e, setProjectTitle)}
              />
            </label>
          </div>
        )}
        {type === 'List' && (
          <div>
            <div>
              <label>
                Title:
                <input
                  type="text"
                  value={list.title}
                  onChange={(e) => handleListChange(e, 'title')}
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
                />
              </label>
            </div>

            <div>
              <select
                name="priority"
                value={list.priority}
                onChange={(e) => handleListChange(e, 'priority')}
              >
                <option value="">Select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        )}
        <button>Cancel</button>
        <button>Add</button>
        
      </form>
    </dialog>
  );
}


export default ListInput;
