import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/'
})

instance.interceptors.request.use((config) => {
<<<<<<< HEAD
    // console.log(config)
=======
    console.log(config)
>>>>>>> 4e95d7ebd4bcd59e07dd1f6a7a5db08a47976514
    return config
}, (error) => Promise.reject(error))

instance.interceptors.response.use(res => {
    if (res.data.status === 'fail') {
        return Promise.reject(res.data.msg)
    } else {
        return res.data.data
    }
}, error => Promise.reject(error))

export default instance
