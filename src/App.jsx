import './App.css'
import TodoList from './components/todoList'
import ListInput from './components/addList'
function App() {


  return (
    <>
 <div className='container'>
<div className='sidebar'>
 <TodoList/>
</div>

<div className='main'>
<ListInput type={'List'}/>
</div>
 </div>
    </>
  )
}

export default App
