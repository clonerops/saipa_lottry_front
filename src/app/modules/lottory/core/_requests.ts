import http from '../../../../_cloner/helpers/services/http'
import { SalePlansDjangoModel, SalePlansModel } from './_models'

const LOTTERY_API_URL = process.env.REACT_APP_API_URL_LOTTERY

export const RETRIEVE_SALE_PLANS_URL = `${LOTTERY_API_URL}/Lottery`
export const RETRIEVE_SALE_PLANS_DETAILS_URL = `${LOTTERY_API_URL}/Lottery/GetSalePlanDetails`

export const LOTTERY_VALID_APPLICANT = `${LOTTERY_API_URL}/LotteryExcelReport/GetLotteryValidApplicants`
export const LOTTERY_VALID_APPLICANT_BY_CAR_NAME = `${LOTTERY_API_URL}/LotteryExcelReport/GetLotteryValidApplicantsByCarName`
export const LOTTERY_VALID_APPLICANT_BY_CAR_ROW = `${LOTTERY_API_URL}/LotteryExcelReport/GetLotValidApplicantsByAnncRowAndAnncCarRow`

// Django

export function retrieveSalePlansRequest() {
  return http.get<SalePlansModel>(RETRIEVE_SALE_PLANS_URL)
}

export function retrieveSalePlansDetailsRequest(id: number) {
  return http.get(RETRIEVE_SALE_PLANS_DETAILS_URL+`/${id}`)
}

// Download Lottery Excel Files
export function downloadLotteryValidApplicant(id: number) {
  return http.get(LOTTERY_VALID_APPLICANT+`/${id}`)
}
export function downloadLotteryValidApplicantByCarName(id: number) {
  return http.get(LOTTERY_VALID_APPLICANT_BY_CAR_NAME+`/${id}`)
}
export function downloadLotteryValidApplicantByCarRow(id: number) {
  return http.get(LOTTERY_VALID_APPLICANT_BY_CAR_ROW+`/${id}`)
}










// Django
const LOTTERY_API_URL_DJANGO = process.env.REACT_APP_API_URL_DJANGO_LOTTERY

export const RETRIEVE_SALE_PLANS_URL_DJANGO = `${LOTTERY_API_URL_DJANGO}/saleplans`

export function retrieveSalePlansDjangoRequest() {
  return http.get(RETRIEVE_SALE_PLANS_URL_DJANGO)
}
