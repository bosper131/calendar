const initialState = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  newEvents: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MONTH":
      return {
        ...state,
        month: action.month,
      };
    case "SET_YEAR":
      return {
        ...state,
        year: action.year,
      };
    case "SET_DAY":
      return {
        ...state,
        day: action.day,
      };
    case "ADD_EVENT":
      return {
        ...state,
        newEvents: {
          ...state.newEvents,
          [action.newEvent.date]: action.newEvent.eventDesc,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
