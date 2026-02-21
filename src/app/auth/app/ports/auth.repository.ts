import type { RegisterUserDTO } from '../dto/register-user.dto'
import type { User } from '../../dom/models/user'
import type { LoginUserDTO } from '../dto/login-user.dto'
import type { AuthSession } from '../../dom/models/auth-session'
export interface AuthRepository {
    register(data: RegisterUserDTO): Promise<User>
    login(data: LoginUserDTO): Promise<AuthSession>
}