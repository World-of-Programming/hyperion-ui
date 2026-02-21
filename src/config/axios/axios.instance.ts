import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { AuthStorage } from '@hyperion/config/api/auth.storage'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

// 👉 Interceptor request (token)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = AuthStorage.getToken()

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

// 👉 (opcional) Interceptor response (errores globales)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // aquí puedes manejar 401, 403, logout automático, etc.
        return Promise.reject(error)
    }
)

export default axiosInstance