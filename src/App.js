import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
import Login from './Components/Log in/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
