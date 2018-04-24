export const API_URL = 'http://wr.promptech.co.kr/api'

function callApi(endpoint, accessToken, method, body) {
  return fetch(`${API_URL}/${endpoint}?access_token=${accessToken}`, {
    headers: { 'Content-Type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json())
  .catch(error => console.warn(error))
  .then(json => {
    return json
  });
}

export default callApi;
