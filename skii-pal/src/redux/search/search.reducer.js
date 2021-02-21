import fakeResults from './fakeResults';


export const queryReducer = (state = {"date": '', "location": ''}, action) => {
    switch (action.type) {
      case 'SET_QUERY':
        return action.payload;
      default:
        return state;
    }
  };

  export const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state += 10;
      case 'RESET_RESULTS':
        return 0;
      default:
        return state;
    }
  };

  export const outlineReducer = (state = '', action) => {
    switch (action.type) {
      case 'OUTLINE':
        return action.payload;
      case 'OUTLINE_LOADING':
        return 'outline loading...';
      default:
        return state;
    }
  };

export const resultsReducer = (state = fakeResults, action) => {
  switch (action.type) {
    case 'SEND_RESULTS':
      return !!state === true ? state.concat(action.payload) : action.payload;
    case 'RESET_RESULTS':
      return '';
    default:
      return state;
  }
};

// export const screenshotsReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'SEND_SCREENSHOTS':
//         return state.concat(action.payload);
//       default:
//         return state;
//     }
//   };

export const loadingStatusReducer = (state = false, action) => {
    switch (action.type) {
      case 'LOADING_STATUS':
        return action.payload;
      default:
        return state;
    }
  };