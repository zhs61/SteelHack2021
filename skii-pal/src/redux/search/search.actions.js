import axios from 'axios';
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

const screenGrab = () => {
  const arr = [];
  const results = store.getState().results;
  for (let i = 0; i < results.length; i++) {
    if (!!results[i].image === false) {
      arr.push(results[i].link);
    }
  }
  getScreenshot(arr);
};

const getScreenshot = (links) => {
  const len = links.length;
  for (let i = 0; i < len; i++) {
    const link = links[i];
    const formattedLink = encodeURIComponent(link);
    axios
      .get(`https://www.googleapis.com/pagespeedonline/v1/runPagespeed?screenshot=true&url=${formattedLink}`)
      .then(res => {
        const rawData = res.data.screenshot;
        if (rawData) {
          const imgData = rawData.data.replace(/_/g, '/').replace(/-/g, '+');
          const screenshot = 'data:' + rawData.mime_type + ';base64,' + imgData;
          store.dispatch({ type: 'SEND_SCREENSHOTS', payload: { link, screenshot } });
        }
      });
  }
};

export const nextPage = () => {
  store.dispatch((dispatch) => {
    dispatch({ type: 'INCREMENT' });
    axios.post(`/search/${store.getState().query}/${store.getState().counter}`).then(res => {
      dispatch({ type: 'SEND_RESULTS', payload: res.data });
      screenGrab();
    });
  });
};

export const outline = (data) => {
  store.dispatch((dispatch) => {
    dispatch({ type: 'OUTLINE_LOADING' });
    dispatch({ type: 'OUTLINE', payload: data })
    // axios.post(`/outline/${site}`).then(res => dispatch({ type: 'OUTLINE', payload: res.data }));
  });
};