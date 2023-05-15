import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const App = () => {
//   // const $h2 = $('h2').text('About us');
//   // const h2 = React.createElement('h2', null, 'About us');

//   const div = React.createElement('div', null, React.createElement('h2', null, 'child'));

//   /*
//     <div>
//       <h2>child</h2>
//     </div>
//   */

//   return div; // <h2>About us</h2>
//   // return <h2>Did this work?</h2>;
// };

const Image = () => {
  const attributes = {
    src: 'https://cdn-icons-png.flaticon.com/256/616/616554.png',
    alt: 'a picture of a dog'
  };

  const image = React.createElement('img', attributes);

  const imageJSX = <img 
    src="https://cdn-icons-png.flaticon.com/256/616/616554.png" 
    alt="a picture of a dog using JSX" 
  />;

  return imageJSX;
};

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
