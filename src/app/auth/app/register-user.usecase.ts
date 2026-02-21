import type { AuthRepository } from './ports/auth.repository'
import type { RegisterUserDTO } from './dto/register-user.dto'
import type { User } from '../dom/models/user'

export class RegisterUserUseCase {
    private readonly authRepository: AuthRepository

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository
    }

    execute(data: RegisterUserDTO): Promise<User> {
        return this.authRepository.register(data)
    }
}