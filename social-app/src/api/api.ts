import axios from 'axios'
import { EditProfileValuesType } from '../components/EditProfileMode/EditProfileMode'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e4c5baca-6875-43f0-b8cf-de3f6c580e89'
  }
})

export const userAPI = {
  getFriends(pageSize: number, pageNumber: number) {
    return instance.get('users', {
      params: {
        count: pageSize,
        page: pageNumber,
        friend: true
      }
    })
  },
  getNotFriends(pageSize: number = 5) {
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
  },
  getUserStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(newStatus: string) {
    return instance.put('profile/status', {
      status: newStatus
    })
  },
  updateProfile(newProfileInformation: EditProfileValuesType) {
    return instance.put(`profile`, { ...newProfileInformation })
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
