import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [cars, setCars] = useState(null);

  useEffect(() => {
    getCars();
  }, []) 


  const getCars = () => {
    axios.get('/api/getCars').then(
      (response) =>  {
        setCars(response.data);
      }
    ).catch(err=> console.log("my error is", err))
  }
  const addCarSubmit = () => {
    axios.post('/api/addCar', {
      brand: 'Ferrari',
      model: 'Testarosa',
      year: 2000,
      available : 'yes'
    })
  }

  const deleteCar = () => {
    //req to update
    axios.post('/api/removeCar', {
      brand: 'Ferrari'
    }).then(res => {
      console.log("app file res", res.data)
      getCars();
    })
  }

  const onCarUpdate = () => {
    axios.post('/api/updateCar', {
      id: '639db12ca34d248420918943',
      brand: 'Roll Royce'
    }).then(res => {
      console.log("update res", res.data);
      getCars();
    })
  }
  
  if(!cars) return null;
  return (
    <div className='app flex-d justify-content-center text-center ma-0'>
      <h3>Show Cars</h3>
      {
      cars.map((eachCar, index) => {
       return (
        <div key={index}>
        <ol>
          <li>{eachCar.brand}</li>
        </ol>
        </div>
       )
      })
      }
      <h3> Add Cars</h3>
      <button onClick={() => addCarSubmit()}>
    Add user
      </button>
      <button onClick={() => getCars()}>
        Refresh
      </button>
      <hr />
      <h3>Remove Cars</h3>
      <button onClick={() => deleteCar()}>
        Remove Car!!
      </button>

      <hr />
      <h3>Update cars</h3>
      <button onClick={() => onCarUpdate()}>
      Update It!
      </button>
  </div>
  )
}

export default App;