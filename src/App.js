import './App.css';
import Mydonation from './components/blooddonation/Mydonation';
import Userdashboard from './components/Dashboard/Userdashboard';
import Userlogin from './components/Login/Userlogin';
import Usersignup from './components/Signup/Usersignup';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Myrequest from './components/myrequest/Myrequest';
import Bloodrequest from './components/bloodrequest/Bloodrequest';
import Bloodbankdashboard from './components/Dashboard/Bloodbankdashboard';
import BloodbankSignup from './components/Signup/BloodbankSignup';
import Bloodbanklogin from './components/Login/Bloodbanklogin';
import Donations from './components/blooddonation/Donations';
import Updatestock from './components/Updatestock/Updatestock';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Userlogin/>} />
          <Route path="/bloodbanklogin" element={<Bloodbanklogin/>} />
          <Route path="/signup" element={<Usersignup/>} />
          <Route path="/bloodbankregister" element={<BloodbankSignup/>} />
          <Route path="/dashboard" element={<Userdashboard/>} />
          <Route path="/mydonation" element={<Mydonation/>} />
          <Route path="/myrequest" element={<Myrequest/>} />
          <Route path="/bloodrequest" element={<Bloodrequest/>} />
          <Route path="/bloodbankdashboard" element={<Bloodbankdashboard/>} />
          <Route path="/donation" element={<Donations />} />
          <Route path="/updatestock" element={<Updatestock />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
