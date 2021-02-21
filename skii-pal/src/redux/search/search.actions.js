import { store } from '../store';
import fakeResults from './fakeResults';

export const setQuery = (query) => {
  store.dispatch({ type: 'SET_QUERY', payload: query });
};

export const handleKey = (e, reset) => {
  if (e.key === 'Enter') {
    if (reset) {
      store.dispatch({ type: 'RESET_RESULTS' });
    }
    search();
  }
};

export const search = (reset) => {
  store.dispatch((dispatch) => {
    if (reset) {
      dispatch({ type: 'RESET_RESULTS' });
    }
    dispatch({ type: 'LOADING_STATUS', payload: true });
    dispatch({ type: 'SEND_RESULTS', payload: filter_data() });
    dispatch({ type: 'LOADING_STATUS', payload: false });
    //screenGrab();
    // axios
    //   .post(`/search/${store.getState().query}`)
    //   .then((res) => dispatch({ type: 'SEND_RESULTS', payload: res.data }))
    //   .then(() => {
    //     dispatch({ type: 'LOADING_STATUS', payload: false });
    //     screenGrab();
    //   });
  });
};

const filter_data = () =>{
  const {date, location} = store.getState().query
  let temp = fakeResults

  if(date != ''){
    console.log(date)
    temp = temp.filter(item => date == new Date(item.resgistration_date + "T" + item.start_time).toLocaleDateString())
  }


  if (location != ''){
    temp = temp.filter(item => item.city.toUpperCase().search(location.toUpperCase()) >= 0)
  }

  return temp;
};


export const outline = (data) => {
  store.dispatch((dispatch) => {
    dispatch({ type: 'OUTLINE_LOADING' });
    dispatch({ type: 'OUTLINE', payload: data })
    // axios.post(`/outline/${site}`).then(res => dispatch({ type: 'OUTLINE', payload: res.data }));
  });
};