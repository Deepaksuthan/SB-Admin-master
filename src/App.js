import './App.css'
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buttons from './Components/Dashboard/CustomComponents/Buttons'
import Card from './Components/Dashboard/CustomComponents/Card';
import UtilitiesColors from './Components/Dashboard/Utilities/UtilitiesColors';
import UtilitiesAnimation from './Components/Dashboard/Utilities/UtilitiesAnimation';
import UtilitiesBorder from './Components/Dashboard/Utilities/UtilitiesBorder';
import UtilitiesOthers from './Components/Dashboard/Utilities/UtilitiesOthers';
import NotFound from './Components/Pages/404Page/NotFound';
import Blank from './Components/Pages/Blank/Blank';
import ForgotPassword from './Components/Pages/ForgotPassword/ForgotPassword';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import Tables from './Components/Dashboard/Tables/Tables';
import Charts from './Components/Dashboard/Charts/Charts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path='/card' element={<Card />} />
          <Route path="/colors" element={<UtilitiesColors />} />
          <Route path="/animations" element={<UtilitiesAnimation />} />
          <Route path="/borders" element={<UtilitiesBorder />} />
          <Route path="/others" element={<UtilitiesOthers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
