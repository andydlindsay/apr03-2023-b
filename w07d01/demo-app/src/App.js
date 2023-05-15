import './App.css';

// import Header from './components/Header';
// import Navbar from './components/Navbar';

import Button from './components/Button';

const App = () => {
  return (
    <div className="App">
      <h2>Demo App 2</h2>

      {/* <Header heading="About us" age="42" /> {/* Header({ heading: 'About us' }) */}
      {/* <Header heading="Join our team" /> */}

      {/* <Navbar headingFromParent="Welcome to our site!!!" /> */}

      <Button label="Login below!"></Button>
      <Button color="orange">Login below!</Button>
    </div>
  );
};

export default App;
