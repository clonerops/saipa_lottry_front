import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

