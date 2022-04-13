import './App.css';
import Axios from 'axios';

function App() {
   Axios.get('api/get').then((data)=>{
    console.log(data.data)
});
  return (
    <div className="App">
      Hellow world!
    </div>
  );
}

export default App;
