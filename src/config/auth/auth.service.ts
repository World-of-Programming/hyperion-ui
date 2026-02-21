import axiosInstance from '@hyperion/config/axios/axios.instance'
import { AuthStorage } from '@hyperion/config/api/auth.storage'

export interface RegisterRequest {
    fullName: string
    email: string
    password: string
}

class AuthService {
    async register(data: RegisterRequest) {
        const response = await axiosInstance.post('/auth/register', data)
        return response.data
    }

    logout(): void {
        AuthStorage.clear()
    }

    isAuthenticated(): boolean {
        return !!AuthStorage.getToken()
    }

    isAdmin(): boolean {
        return AuthStorage.getRole() === 'ADMIN'
    }
}

export const authService = new AuthService()