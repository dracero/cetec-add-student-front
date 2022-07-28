import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as attendanceActions from "./app/actions/AttendanceActions";
import TextField from '@mui/material/TextField';

const Date = () => {
  const dispatch = useDispatch();
  const date = useSelector((store) => store.attendance.date);

  const handleChange = (event) => {
    dispatch(attendanceActions.date(event));
  };

  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          label="Fecha"
          value={date || null}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{ m: 1 }} />}
        />
      </LocalizationProvider>
  );
}

export default Date;
