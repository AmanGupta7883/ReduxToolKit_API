import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './Redux/Slices/Api/ApiSlice';

function App() {
  const state = useSelector((state) => state);
  const isLoading = useSelector((state) => state.api.loading);
  const isErr = useSelector((state) => state.api.error)
  const dispatch = new useDispatch();


  return (
    <>
      <button onClick={() => dispatch(fetchData())}>Get Data</button>
      <hr />
      <div style={{ textAlign: "left" }}>
        {
          (isErr) ? <h4>Unable to load the data</h4> :
            (isLoading) ? <h4>Loading...</h4> :
              state.api.data && state.api.data.map(e => <li key={e.id}>{e.title}</li>)
        }
      </div>
    </>
  )
}

export default App
