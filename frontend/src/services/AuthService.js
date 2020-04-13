import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('/user/registration', credentials)
    },
    login(credentials) {
        return Api().post('/user/login', credentials)
    }
}