const initialState = { email: '', date: '', course: 'Otro', image: '' };

export function attendanceReducer(state = initialState, action) {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.newEmail,
      };
      
    case "DATE":
      return {
      ...state,
      date: action.newDate,
    };
    
    case "COURSE":
      return {
      ...state,
      course: action.newCourse,
    };
    
    case "IMAGE":
      return {
      ...state,
      image: action.newImage,
    };

    default:
      return state;
  }
}
