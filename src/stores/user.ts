import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export interface UserStoreState {
  token: string
}

export const useUserStore = defineStore('user', {
  state: (): UserStoreState => {
    return {
      token: '',
    }
  },
  getters: {
    isLogin(): boolean {
      return !!this.token
    },
  },
  actions: {
    login(token: string) {
      this.token = token
    },
    logout() {
      this.token = ''
      Cookies.remove('token')
      const router = useRouter()
      router.push({
        name: 'index',
      })
    },
  },
})
