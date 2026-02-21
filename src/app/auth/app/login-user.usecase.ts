import type { AuthRepository } from '@hyperion/app/auth/app/ports/auth.repository'
import type { LoginUserDTO } from './dto/login-user.dto'
import type { AuthSession } from '../dom/models/auth-session'

export class LoginUserUseCase {
    private readonly authRepository: AuthRepository

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository
    }

    execute(data: LoginUserDTO): Promise<AuthSession> {
        return this.authRepository.login(data)
    }
}