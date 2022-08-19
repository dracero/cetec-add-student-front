
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as attendanceActions from "./app/actions/AttendanceActions";
import './App.css';
import Courses from "./Courses";
import Date from "./Date";
import Image from "./Image";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AddAttendance = () => {
  const dispatch = useDispatch();
  const email = useSelector((store) => store.attendance.email);
  const date = useSelector((store) => store.attendance.date);
  const course = useSelector((store) => store.attendance.course);
  const image = useSelector((store) => store.attendance.image);
  
  const handleChangeAttendanceEmail = (event) => {
    dispatch(attendanceActions.email(event.target.value));
  }

  const send_attendance = (event) => {
    var bodyFormData = new FormData();
    bodyFormData.append('email', email);
    bodyFormData.append('date', date);
    bodyFormData.append('course', course);
    bodyFormData.append('image', image);

    axios({
      method: "post",
      url: process.env.REACT_APP_URL + "/attendance",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true
    })
      .then(function (response) {
        //console.log("EXITO");
      })
      .catch(function (response) {
        //console.log("ERROR");
      });
  };

  return (
    <form onSubmit={send_attendance}>
      <h2> Agregar asistencia </h2>
      <div className="formcontainer">
        <div className="container">
          <TextField margin="normal" id="outlined-basic-email" label="Email" variant="outlined" onChange={handleChangeAttendanceEmail}/>
          <br/>
          <Courses/>
          <br/>
          <Date/>
          <br/>
          <Image actions={attendanceActions}/>
        </div>
      </div>

      <Box m={1} pt={2}>
        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </Box>
    </form>
  )
}

export default AddAttendance;