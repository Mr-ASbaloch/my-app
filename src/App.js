import { useState, createContext } from "react";
import "./App.css";
import ComA from "./Components/ComA";

const AppState = createContext();

function App() {
  const [data, setData] = useState("abdul saeed");
  const [name , setName] = useState ({name: "ahmad" , age:20})
  return (
    <div className="comp">
      <AppState.Provider value={{data , name}}>
      <ComA  />
      </AppState.Provider>
      
    </div>
  );
}

export default App;
export { AppState };
