export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password, email})
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};

export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({identifier, password})
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.jwt) {
      localStorage.setItem('jwt', data.jwt);
      return data;
    }
  })
  .catch(err => console.log(`что-то случилось ${err}`))
}

export const checkToken = (tocken) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tocken}`
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data
  })
}