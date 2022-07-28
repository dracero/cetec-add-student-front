
import { createStore, combineReducers } from "redux";
import { attendanceReducer } from "./reducers/AttendanceReducer";
import { studentReducer } from "./reducers/StudentReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    attendance: attendanceReducer,
    student: studentReducer,
  })

export default createStore(reducer, composeWithDevTools());
