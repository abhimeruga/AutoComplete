const initialState = {
  studies: [],
};
export const studyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STUDY":
      return { ...state, studies: [...state.studies, action.payload] };
    default:
      return state;
  }
};
