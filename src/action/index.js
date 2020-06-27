import axios from 'axios';

const apiUrl = 'http://localhost:8080';

const sendEmail = ({ name, email, message }, reset) => axios
  .post(`${apiUrl}/api/sendEmail`, { name, email, message })
  .then(() => {
    reset();
  })
  .catch((error) => {
    throw error;
  });

export default sendEmail;
