import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import NavigationBar from "./Components/Navbar/NavigationBar";
//Pages
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Map from "./Pages/Map/Map";
import Home from "./Pages/Home/Home";


function App() {
  const isLoggin = false;
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            {/* <Route path="/map" element={isLoggin ? <Map /> : <div>Haritayı Görmek İçin <a href="/login">Giriş Yapınız</a></div>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
