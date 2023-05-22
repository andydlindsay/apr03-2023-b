import {useEffect, useState} from 'react';

const DocumentTitle = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    // if (counter > 10) {
    console.log('updating the document title');
    document.title = `current count is ${counter}`;
    // }
  }, [counter]);


  return (
    <div>
      <h2>DocumentTitle component</h2>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>

      <div>
        <label>Search Term:</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <h2>Search term: {searchTerm}</h2>
      </div>
    </div>
  );
};

export default DocumentTitle;