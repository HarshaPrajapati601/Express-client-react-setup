import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  // useEffect(() => {
  //   axios.get('/api/users').then(
  //     (response) =>  {
  //       console.log("respn", response.data);
  //     }
  //   )
  // }, [])

  const addUser = () => {
    axios.get('/api/users').then(
      (response) =>  {
        console.log("respn", response.data);
      }
    ).catch(err=> console.log("my error is", err))
  }
  
  return (
    <div className='app'>
      <button onClick={() => addUser()}>

      </button>
  </div>
  )
}

export default App;