import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e4c5baca-6875-43f0-b8cf-de3f6c580e89'
  }
})

export const userAPI = {
  getFriends(pageSize: number, currentPage: number) {
    return instance.get('users', {
      params: {
        count: pageSize,
        page: currentPage,
        friend: true
      }
    })
  },
  getNotFriends(pageSize: number) {
    return instance.get('users', {
      params: { count: pageSize, friend: false }
    })
  },
  unFollowUserApi(id: number) {
    return instance.delete(`follow/${id}`)
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`)
  }
}

export const profileAPI = {
  getUserProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  login(values: { email: string; password: string; rememberMe: boolean }) {
    return instance.post('auth/login', {
      email: values.email,
      password: values.password,
      rememberMe: values.rememberMe
    })
  },
  authorization() {
    return instance.get('/auth/me')
  },
  logOut() {
    return instance.delete('/auth/login')
  }
}
