import { useState } from 'react'
import { LoginUserUseCase } from '../../app/login-user.usecase'
import { AuthHttpRepository } from '../../infra/http/auth-http.repository'
import type { LoginUserDTO } from '../../app/dto/login-user.dto'
import type { AuthSession } from '../../dom/models/auth-session'
import { AuthStorage } from '@hyperion/config/api/auth.storage'

export function useLogin() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const login = async (data: LoginUserDTO): Promise<AuthSession | null> => {
        setLoading(true)
        setError(null)

        try {
            const repository = new AuthHttpRepository()
            const useCase = new LoginUserUseCase(repository)

            const session = await useCase.execute(data)

            // 🔐 Persistencia del token (simple)

            AuthStorage.saveToken(session.token)
            //localStorage.setItem('token', session.token)

            return session
        } catch (err: any) {
            setError(err?.response?.data?.message ?? 'Credenciales inválidas')
            return null
        } finally {
            setLoading(false)
        }
    }

    return {
        login,
        loading,
        error,
    }
}