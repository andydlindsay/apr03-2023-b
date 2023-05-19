import '../styles/TodoList.scss';
import TodoListItem from './TodoListItem';

/*
Props:
  - todos: array
*/

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return <TodoListItem
      key={todo.id}
      task={todo.task} 
      id={todo.id}
      onTodoClick={props.onTodoClick}
    />;
  });

  return (
    <div>
      { mappedTodos }
    </div>
  );
};

export default TodoList;

TodoList.defaultProps = {
  todos: [
    {
      id: 'abc',
      task: 'finish the photolabs project'
    },
    {
      id: 'def',
      task: 'finish Friday core work'
    },
    {
      id: 'ghi',
      task: 'brush the cat'
    },
  ]
};
