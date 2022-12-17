import axios from 'axios';

const App = () => {

  const addUser = () => {
    axios.get('/api/users').then(
      (response) =>  {
        console.log("respn", response.data);
      }
    ).catch(err=> console.log("my error is", err))
  }
  
  return (
    <div className='app flex-d justify-content-center'>
      <button onClick={() => addUser()}>
    Add user
      </button>
  </div>
  )
}

export default App;