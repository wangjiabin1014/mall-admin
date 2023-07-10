import instance from '@/axios'

export default {
    login(params) {
        return instance.post('/passport/login', params)
    }
}