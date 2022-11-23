import './App.css';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
//Components
import NavigationBar from './Components/Navbar/NavigationBar';
//Pages
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register'
import Map from './Pages/Map/Map';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <div id="content">
          <Routes>
            <Route path="/map" element={<Map />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>


  )
}

export default App
