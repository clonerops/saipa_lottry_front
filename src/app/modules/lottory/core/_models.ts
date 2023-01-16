export interface PlansTableModel {
    id: number, 
    lotterySalePlan: string
    announceNo: number, 
    announceRowNo: number, 
    circulationNo: number, 
    carRow: number, 
    mainCapacity: number, 
    reserveCapacity: number, 
    winDistance: number, 
    lotteryBaseNo: number, 
    description: string, 
}

export interface PlansSelectOptionModel {
    Id: number
    Title: string 
}

export interface SalePlansModel {
    id: number
    salePlanDescription: string
    data: []
}

// Django
export interface SalePlansDjangoModel {
    Id: number
    Description: string
    data: []
}