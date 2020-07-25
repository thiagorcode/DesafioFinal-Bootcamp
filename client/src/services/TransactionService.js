import http from "../http-common";
const getAll = (date) => {
   return http.get(`?period=${date}`)
}
const create = (data) => {
   return http.post('/add', data)
}
const remove = (id) => {
   return http.delete(`/remove/${id}`)
}

export default { getAll, create, remove };