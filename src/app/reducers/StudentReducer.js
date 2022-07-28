const initialState = { email: '', name: '', image: '' };

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.newEmail,
      };
      
    case "NAME":
      return {
      ...state,
      name: action.newName,
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
