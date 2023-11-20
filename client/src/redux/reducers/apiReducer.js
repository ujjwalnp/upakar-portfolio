const initialState = {
    sharedData: null,
  };
  
  const apiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SHARED_DATA':
        return { ...state, sharedData: action.payload };
      default:
        return state;
    }
  };
  
  export default apiReducer;  