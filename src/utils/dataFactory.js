
function createList(title, dueDate, priority, description) {
  return {
    id: crypto.randomUUID(),
    title,
    dueDate,
    priority,
    description,
    isCompleted:false
  };
}

function createProject(title) {
  return {id:crypto.randomUUID(), title, todoList: [] };
}

export {createList,createProject}