import { BrowserRouter as   Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import JobPage from "./JobPage";


function App() {
  return (

   <Router>
     <Routes>
      <Route path="/" element= {<LandingPage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/JobPage" element={<JobPage/>}/>
    </Routes>
   </Router>
   
  );
}

export default App;
