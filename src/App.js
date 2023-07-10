
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Destination from './Pages/Home/Destination/Destination';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/registration" element={<Registration></Registration>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/destination" element={<Destination></Destination>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
