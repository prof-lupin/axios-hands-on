import React, {useEffect, useState} from 'react';
import List from './components/List';
//import API from './api';
import axios from 'axios';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventList, setEventList] = useState([]);
  // 5cf5805fb53e011a64671582
  useEffect(() => {
    axios.get('http://localhost:8080/test/hello').then((res) => {
      //const obj = res.data.docs;
      setEventList(res.data);
      // console.log(res.data);
      //console.log(obj.name);
    });
    // API.get('test/hello').then((res) => {
    //   setEventList(res.data);
    // });
    setIsLoading(false);
  }, [setIsLoading, setEventList]);

  return (
    <div className="body-div">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <List events = {eventList} />
      )}
    </div>
  );
}

export default App;