import http from '../../../../_cloner/helpers/services/http'
import {SalePlansDjangoModel, SalePlansModel} from './_models'

const LOTTERY_API_URL = process.env.REACT_APP_API_URL_LOTTERY

export const RETRIEVE_SALE_PLANS_URL = `${LOTTERY_API_URL}/Lottery`
export const RETRIEVE_SALE_PLANS_DETAILS_URL = `${LOTTERY_API_URL}/Lottery/GetSalePlanDetails`
export const LOTTERY_MESS_APPLICANTS = `${LOTTERY_API_URL}/Lottery/CreateRandomMessFromValidApplicants`
export const LOTTERY_WINNERS = `${LOTTERY_API_URL}/Lottery/CreateLotteryWinners`

export const LOTTERY_VALID_ALL_APPLICANT = `${LOTTERY_API_URL}/LotteryExcelReport/GetLotteryAllApplicants`
export const LOTTERY_VALID_APPLICANT = `${LOTTERY_API_URL}/LotteryExcelReport/GetLotteryValidApplicants`
export const LOTTERY_INVALID_APPLICANT = `${LOTTERY_API_URL}/LotteryExcelReport/GetLotInValidApplicants`
export const LOTTERY_WINNERS_LIST = `${LOTTERY_API_URL}/LotteryExcelReport/GetLotteryWinners`

// Django

export function retrieveSalePlansRequest() {
  return http.get<SalePlansModel>(RETRIEVE_SALE_PLANS_URL)
}

export function retrieveSalePlansDetailsRequest(id: number) {
  return http.get(RETRIEVE_SALE_PLANS_DETAILS_URL + `/${id}`)
}
export function lotteryMessApplicants(data: object) {
  return http.post(LOTTERY_MESS_APPLICANTS, JSON.stringify(data))
}
export async function lotteryWinners(data: object) {
  try {
    const response = await http.post(LOTTERY_WINNERS, JSON.stringify(data))
    return response
  } catch (error: any) {
    return error.response
  }
}

// Download Lottery Excel Files
export function downloadLotteryAllValidApplicant(id: number) {
  return http.get(LOTTERY_VALID_ALL_APPLICANT + `/${id}`, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'blob',
    },
  })
}
export function downloadLotteryValidApplicant(id: number) {
  return http.get(LOTTERY_VALID_APPLICANT + `/${id}`, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'blob',
    },
  })
}
export function downloadLotteryInValidApplicant(id: number) {
  return http.get(LOTTERY_INVALID_APPLICANT + `/${id}`, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'blob',
    },
  })
}
export function downloadWinners(id: number) {
  return http.get(LOTTERY_WINNERS_LIST + `/${id}`, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'blob',
    },
  })
}

// Django
const LOTTERY_API_URL_DJANGO = process.env.REACT_APP_API_URL_DJANGO_LOTTERY

export const RETRIEVE_SALE_PLANS_URL_DJANGO = `${LOTTERY_API_URL_DJANGO}/saleplans`
export const RETRIEVE_SALE_DETAIL_PLANS_URL_DJANGO = `${LOTTERY_API_URL_DJANGO}/saleplans`

export function retrieveSalePlansDjangoRequest() {
  return http.get(RETRIEVE_SALE_PLANS_URL_DJANGO)
}

export function retrieveSalePlansDetailsDjangoRequest(id: number) {
  return http.get(RETRIEVE_SALE_DETAIL_PLANS_URL_DJANGO + `/${id}`)
}
