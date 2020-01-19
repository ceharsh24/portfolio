import axios from 'axios';

const apiUrl = 'http://localhost:8080';

export const sendEmail = ({name, email, message}, reset) => {
  return axios.post(`${apiUrl}/api/sendEmail`, {name, email, message})
    .then(res => {
      reset()
    })
    .catch(error => {
      throw(error);
    });
}