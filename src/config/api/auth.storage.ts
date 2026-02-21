// src/shared/storage/auth.storage.ts
import { CryptoUtil } from '@hyperion/config/api/crypto.util'

const TOKEN_KEY = 'token'
const ROLE_KEY = 'role'

export class AuthStorage {
  static saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, CryptoUtil.encrypt(token))
  }

  static getToken(): string | null {
    const encrypted = localStorage.getItem(TOKEN_KEY)
    return encrypted ? CryptoUtil.decrypt(encrypted) : null
  }

  static saveRole(role: string): void {
    localStorage.setItem(ROLE_KEY, CryptoUtil.encrypt(role))
  }

  static getRole(): string | null {
    const encrypted = localStorage.getItem(ROLE_KEY)
    return encrypted ? CryptoUtil.decrypt(encrypted) : null
  }

  static clear(): void {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(ROLE_KEY)
  }
}