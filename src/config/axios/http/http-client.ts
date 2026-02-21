import axios from 'axios'
import environment from "../../../environments/environment"

export const httpClient = axios.create({
    baseURL: environment.hyperion.apiEndpoint,
    headers: {
        'Content-Type': 'application/json',
    },
})