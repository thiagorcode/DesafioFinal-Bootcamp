import http from "../http-common";
const getAll = (date) => {
   return http.get(`?period=${date}`)
}


export default { getAll };