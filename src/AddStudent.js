
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as studentActions from "./app/actions/StudentActions";
import './App.css';
import Image from "./Image";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AddStudent = () => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.student.name);
  const email = useSelector((store) => store.student.email);
  const image = useSelector((store) => store.student.image);
  
  const handleChangeStudentName = (event) => {
    dispatch(studentActions.name(event.target.value));
  }
  
  const handleChangeStudentEmail = (event) => {
    dispatch(studentActions.email(event.target.value));
  }

  const send_student = (event) => {
    var bodyFormData = new FormData();
    bodyFormData.append('name', name);
    bodyFormData.append('email', email);
    bodyFormData.append('image', image);

    axios({
      method: "post",
      url: process.env.REACT_APP_URL + "/student",
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
      window.location.reload(false);  
  };

  return (
    <form onSubmit={send_student}>
      <h2> Agregar estudiante </h2>
      <div className="formcontainer">
        <div className="container">
          <TextField margin="normal" id="outlined-basic-name" label="Nombre" variant="outlined" onChange={handleChangeStudentName}/>
          <br/>
          <TextField margin="normal" id="outlined-basic-email" label="Email" variant="outlined" onChange={handleChangeStudentEmail}/>
          <br/>
          <Image actions={studentActions}/>
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

export default AddStudent;