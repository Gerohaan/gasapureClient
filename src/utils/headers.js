const gasApure = localStorage.getItem('gasApure')
const baseURL = 'http://localhost:3000';
const header = {
  headers: {
    'Accept': 'application/json;charset=utf-8',
    'Authorization': 'Bearer ' + gasApure
  }
}

export { header, baseURL };
