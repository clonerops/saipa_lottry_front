// import axios from 'axios'

// const API_URL = process.env.REACT_APP_API_URL
// const LOTTERY_API_URL = process.env.REACT_APP_API_URL_LOTTERY

// export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`
// console.log(API_URL)

// export function requestPassword(email: string) {
//   return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
//     email,
//   })
// }

import http from '../../../../_cloner/helpers/services/http'
import { SalePlansModel } from './_models'

const LOTTERY_API_URL = process.env.REACT_APP_API_URL_LOTTERY

export const RETRIEVE_SALE_PLANS_URL = `${LOTTERY_API_URL}/Lottery`
export const RETRIEVE_SALE_PLANS_DETAILS_URL = `${LOTTERY_API_URL}/Lottery/GetSalePlanDetails`

export function retrieveSalePlansRequest() {
  return http.get<SalePlansModel>(RETRIEVE_SALE_PLANS_URL)
}

export function retrieveSalePlansDetailsRequest(id: number) {
  return http.get(RETRIEVE_SALE_PLANS_DETAILS_URL+`/${id}`)
}