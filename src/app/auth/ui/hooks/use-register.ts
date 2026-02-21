import { useState } from 'react'
import { RegisterUserUseCase } from '@hyperion/app/auth/app/register-user.usecase'
import { AuthHttpRepository } from '@hyperion/app/auth/infra/http/auth-http.repository'
import type { RegisterUserDTO } from '@hyperion/app/auth/app/dto/register-user.dto'
import type { User } from '@hyperion/app/auth/dom/models/user'

export function useRegister() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const register = async (data: RegisterUserDTO): Promise<User | null> => {
    setLoading(true)
    setError(null)

    try {
      const repository = new AuthHttpRepository()
      const useCase = new RegisterUserUseCase(repository)

      return await useCase.execute(data)
    } catch (err: any) {
      setError(err?.response?.data?.message ?? 'Error al registrar')
      return null
    } finally {
      setLoading(false)
    }
  }

  return {
    register,
    loading,
    error,
  }
}