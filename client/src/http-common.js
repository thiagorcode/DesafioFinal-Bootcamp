import axios from 'axios';

// !URL da API
export default axios.create({
   baseURL: 'http://projetofinanceiro.herokuapp.com/api/transaction',
   headers: {
      'Content-type': 'application/json',
   },
});
