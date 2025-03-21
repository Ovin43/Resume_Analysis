import { Routes,Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import { useFileStore } from "./store/useFileStore";

const App = () =>{
    const {analysis}=useFileStore();
    console.log({analysis})
    return (
    <div>
       <Routes>
        <Route path="/" element={<HomePage />} />
       </Routes>
    </div>);

};
export default App;