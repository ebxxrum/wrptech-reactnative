import axios from 'axios';

const API_URL = 'http://wr.promptech.co.kr/api'; 

function callAxios(endpoint, accessToken) {
  return axios(`${API_URL}/${endpoint}?access_token=${accessToken}`, {
    // TODO: save access_token in header using FCM(firebase cloud managing)
  })
  .then(json => {
    return json.data
  }); 
};

export default callAxios;