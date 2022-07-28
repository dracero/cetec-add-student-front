import {React} from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import AddStudent from "./AddStudent";
import AddAttendance from "./AddAttendance";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from './logo.svg';

const NavbarList = () => {
  const location = useLocation().pathname

  const list = () => {
    return(
      <div>
        <Box m={0} pt={0}>
          <Button component={Link} to="/add-student" variant="contained">Agregar estudiante</Button>
        </Box>
        <br/>
        <Box m={0} pt={0}>
          <Button component={Link} to="/add-attendance" variant="contained">Agregar asistencia</Button>
        </Box>
      </div>
    )
  }

  return(
    location === "/" ? list() : null
  )
};

const NavbarButton = () => {
  const location = useLocation().pathname
  return(
    location === "/" ? null : <Button component={Link} to="/" variant="text">Volver</Button>
  )
};

const Home = () => {
  return(
    <>
      <img src={logo} alt="Logo FIUBA" className="logo-img" />
      <br/>
      <NavbarList />
    </>
  )
};

export default function Navbar() {
  return (
    <Router>
      <div className="center">
        <Routes>
          <Route path="/add-student" element={<AddStudent/>}></Route>
          <Route path="/add-attendance" element={<AddAttendance/>}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <NavbarButton />
      </div>
    </Router>
  );
}
