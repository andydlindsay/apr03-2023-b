import '../styles/TodoListItem.scss';

import { useState } from 'react';

/*
State:
  isComplete: boolean
Props:
  id: string
  task: string
  category?: string
*/

const TodoListItem = (props) => {
  const [isComplete, setIsComplete] = useState(false);

  const clickHandler = () => {
    // if (isComplete) {
    //   setIsComplete(false);
    // } else {
    //   setIsComplete(true);
    // }

    // setIsComplete(isComplete ? false : true);

    setIsComplete(!isComplete);

    // if (isComplete) {
    //   props.onTodoClick(false);
    // } else {
    //   props.onTodoClick(true);
    // }
    
    props.onTodoClick(!isComplete);
  };

  let className = "todo-list-item";

  if (isComplete) {
    className += " todo-list-item--completed"
  }

  return (
    <div className={ className }>
      <h2>Task: { props.task } ({ props.id })</h2>
      <button onClick={clickHandler}>
        { isComplete ? '✅' : '🟩' }
      </button>
    </div>
  );
};

export default TodoListItem;

TodoListItem.defaultProps = {
  id: 'abc',
  task: 'mow the lawn'
};
