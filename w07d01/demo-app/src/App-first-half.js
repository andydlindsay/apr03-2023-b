import './App.css';

const App = () => {
  const genGreeting = () => {
    return 'join our newsletter';
  };

  const myArray = [
    <h2 key="abc">this is an h2</h2>,
    <p key="def">this is a paragraph tag</p>,
    <aside key="ghi">this is an aside</aside>
  ];

  return (
    <div className="App">
      <h2>Demo App</h2>
      {/* <h2>{ genGreeting() }</h2> */}

      { myArray }
    </div>
  );
};

export default App;
