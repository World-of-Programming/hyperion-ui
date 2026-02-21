import CryptoJS from 'crypto-js'

const ENCRYPTION_KEY = 'phegon-dev-inventory'

export class CryptoUtil {
  static encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString()
  }

  static decrypt(data: string): string {
    const bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_KEY)
    return bytes.toString(CryptoJS.enc.Utf8)
  }
}