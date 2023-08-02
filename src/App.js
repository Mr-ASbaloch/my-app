
import { useState } from 'react';
import './App.css';
import ComA from './Components/ComA';


function App() {
  const [data ,setData] = useState ("abdul saeed")
  return (
   
    <div className='comp'>
    <ComA/>
  
    
    </div>
  );
}

export default App;
