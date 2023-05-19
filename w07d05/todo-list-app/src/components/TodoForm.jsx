import { useState } from 'react';

const TodoForm = (props) => {
  const [task, setTask] = useState('');
  const [id, setId] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    // alert(`You are creating a new task of: ${task}`);
    props.createNewTodo(task, id);
  };

  return (
    <div>
      <h2>New Todo Form</h2>

      <form onSubmit={submitHandler}>
        <label>Task</label>
        <input 
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <br/>
        <label>Id</label>
        <input 
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <br/>
        <button type="submit">Create new todo!</button>
      </form>
    </div>
  );
};

export default TodoForm;
