// main
export interface PlansTableModel {
    id: number,
    lotterySalePlan: string
    lotterySalePlanId: number
    lotteryStatusId: number
    announceNo: number
    announceRowNo: number 
    circulationNo: number 
    circulationDesc: number 
    carRow: number 
    mainCapacity: number 
    reserveCapacity: number 
    winDistance: number 
    lotteryBaseNo: number 
    description: string
}

// Django
// export interface PlansTableModel {
//     Id: number, 
//     LotterySalePlan: string
//     AnnounceNo: number, 
//     AnnounceRowNo: number, 
//     CirculationNo: number, 
//     CarRow: number, 
//     MainCapacity: number, 
//     ReserveCapacity: number, 
//     WinDistance: number, 
//     LotteryBaseNo: number, 
//     Description: string, 
// }



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

export interface WinnersList {
    nationalcode: string
    trackingcode: string
    gender: string
}