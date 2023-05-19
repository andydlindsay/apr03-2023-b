import '../styles/Header.scss';

/*
Props:
  - numComplete: number
  - numTodos: number
*/

const Header = (props) => {
  let className = "total";

  if (props.numComplete / props.numTodos === 1) {
    className += " total--complete"
  }

  return (
    <div className="header">
      <h2>The Not-So-Smart Todo List App</h2>
      <h3 className={ className }>{ props.numComplete} / { props.numTodos }</h3>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  numComplete: 5,
  numTodos: 7
};
