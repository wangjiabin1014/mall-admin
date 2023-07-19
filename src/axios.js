import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/'
})

instance.interceptors.request.use((config) => {
    // console.log(config)
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
