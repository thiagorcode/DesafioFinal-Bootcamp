import http from "../http-common";
const getAll = (date) => {
   return http.get(`?period=${date}`)
}
const create = (data) => {
   return http.post('/add', data)
}

export default { getAll, create };