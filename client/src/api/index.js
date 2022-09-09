import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchRoles = () => API.get('/roles')
export const createRole = (newRole) => API.post('/roles', newRole)
export const updateRole = (id, updatedRole) => API.patch(`/roles/${id}`, updatedRole)
export const deleteRole = (id) => API.delete(`/roles/${id}`)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
