import './App.css';
import { useState } from 'react';

// import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoForm from './components/TodoForm';

const initialTodos = [
  {
    id: 'jkl',
    task: 'Walk the dog'
  },
  {
    id: 'mno',
    task: 'learn to juggle'
  },
  {
    id: 'pqr',
    task: 'do the laundry'
  }
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [numComplete, setNumComplete] = useState(0);

  const createNewTodo = (task, id) => {
    const newTodo = {
      task: task,
      id: id
    };

    // const copyTodos = [...todos];
    // copyTodos.push(newTodo);

    const copyTodos = [...todos, newTodo];
    setTodos(copyTodos);
  };

  const onTodoClick = (shouldIncrement) => {
    if (shouldIncrement) {
      setNumComplete(numComplete + 1);
    } else {
      setNumComplete(numComplete - 1);
    }
  };

  return (
    <div className="App">
      <Header numTodos={ todos.length } numComplete={ numComplete } />
      <TodoForm createNewTodo={ createNewTodo } />
      <TodoList todos={ todos } onTodoClick={ onTodoClick } />
    </div>
  );
};

export default App;
