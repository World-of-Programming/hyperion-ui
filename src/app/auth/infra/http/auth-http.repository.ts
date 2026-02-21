import type { AuthRepository } from '../../app/ports/auth.repository'
import type { RegisterUserDTO } from '../../app/dto/register-user.dto'
import type { User } from '../../dom/models/user'
import { httpClient } from '@hyperion/config/axios/http/http-client'
import type { LoginUserDTO } from '../../app/dto/login-user.dto'
import type { AuthSession } from '../../dom/models/auth-session'

export class AuthHttpRepository implements AuthRepository {
    async register(data: RegisterUserDTO): Promise<User> {
        const response = await httpClient.post<User>('api/auth/register', data)
        return response.data
    }
    async login(data: LoginUserDTO): Promise<AuthSession> {
    const res = await httpClient.post<AuthSession>('api/auth/authenticate', data)
    return res.data
  }
}