import axios from 'axios';

axios.defaults.baseURL = 'http://wr.promptech.co.kr/api'; 
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers['Access-Control-Allow-Headers'] = 'Authorization';

// TODO: make post api and replace callApi
function callAxios(endpoint, accessToken) {
  // return axios(`/${endpoint}`, {
  return axios(`/${endpoint}?access_token=${accessToken}`, {
    // TODO: save access_token in header using FCM(firebase cloud managing)
  })
  .then(json => {
    return json.data
  }); 
};

export default callAxios;