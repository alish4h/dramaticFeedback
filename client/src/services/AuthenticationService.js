import Api from '@Services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}


