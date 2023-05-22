import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
      .then((res) => {
        console.log(res.data);
        setTopics(res.data);
      });

    // fetch('https://www.dnd5eapi.co/api/spells/acid-arrow')
    //   .then(res => res.json())
    //   .then(res => console.log(res));
  }, []);

  const mappedTopics = topics.map((topic) => {
    return <h2 key={topic.id}>{topic.title}</h2>;
  });

  return (
    <div>
      <h2>Data Fetching!</h2>

      { mappedTopics }
    </div>
  );
};

export default DataFetching;
