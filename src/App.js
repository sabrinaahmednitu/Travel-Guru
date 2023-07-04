
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/registration" element={<Registration></Registration>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/registration" element={<Registration></Registration>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
