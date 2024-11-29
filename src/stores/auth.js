import { defineStore } from 'pinia';
import { register, login, logout, getAll } from "./../services/authService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      userInfo: ref({}),
      userList: ref([]),
      accessToken: ref(''),
      tokenType: ref(''),
      loading: false,
      response: ref({}),
      dataUser: ref({})
    };
  },
  getters: {
    getUser(state) {
      return state.userInfo
    },
    getUserList(state) {
      return state.userList
    },
    getDataUser(state) {
      state.dataUser = {
        name: localStorage.getItem('nameUser'),
        email: localStorage.getItem('emailUser')
      }
      return state.dataUser
    }
  },
  actions: {

    async registerUser(param) {
      this.loading = true
      try {
        this.response.value = await register(param)
        this.userInfo.value = this.response.value
        localStorage.setItem('gasApure', this.userInfo.value.access_token)
        localStorage.setItem('nameUser', this.userInfo.value.data.name)
        localStorage.setItem('emailUser', this.userInfo.value.data.email)
        localStorage.setItem('idUser', this.userInfo.value.user.id)
        this.loading = false
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },

    async loginUser(param) {
      this.loading = true
      try {
        this.response.value = await login(param)

        this.userInfo.value = this.response.value
        localStorage.setItem('gasApure', this.userInfo.value.token)
        localStorage.setItem('nameUser', this.userInfo.value.user.userName)
        localStorage.setItem('emailUser', this.userInfo.value.user.email)
        localStorage.setItem('idUser', this.userInfo.value.user.id)
        this.loading = false
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.msg,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },

    async logoutUser() {
      this.loading = true
      try {
        this.response.value = await logout()
        this.userInfo.value = {}
        localStorage.removeItem('gasApure')
        localStorage.removeItem('nameUser')
        localStorage.removeItem('emailUser')
        localStorage.removeItem('idUser')
        this.loading = false
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.msg,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },

    async getUsersAll() {
      this.loading = true
      try {
        this.response.value = await getAll()
        this.userList.value = this.response.value
        this.loading = false
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },

  },
});
