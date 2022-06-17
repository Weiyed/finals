/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React ,{useState}from 'react';
import TodoList from './TodoList'
function App(){
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false}])
  return(
    <>
     <TodoList todos={todos}/>
     <input type= "text" />
     <button>Add Todo</button>
     <button>Clear Complete</button>
     <div>0 left to do</div>
    </>
  )
}
export default App;
