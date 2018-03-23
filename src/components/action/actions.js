import axios from 'axios';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export function fetchData() {
  return dispatch =>{
      axios.get('http://product-stage.dreamlines.de/de/cruises/search?bypassAuthentication=true')
      .then( (response)=> {
        console.log(response.data.cruises);
        dispatch({
          type:FETCH_DATA_SUCCESS,
          data:response.data.cruises
        })

      })
      .catch((error)=> {
        console.log(error);
      });

  }
};
