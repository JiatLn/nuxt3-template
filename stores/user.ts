import { defineStore } from 'pinia'

export interface UserState {
  token: string
  username: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    username: '',
  }),
  getters: {
    isLoggedIn: state => !!state.token,
  },
  actions: {
    login(token: string) {
      this.$state.token = token
    },
    logout() {
      this.$state.token = ''
    },
  },
  persist: true,
})
