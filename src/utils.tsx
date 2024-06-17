export interface Profile {
    profileName: string,
    profilePicture: string
}

export interface TripUpdate {
    locationFrom: string,
    locationTo: string,
    completed: boolean
}

export interface TruckIssueUpdate {
    truck: string
}

export interface CargoCompany {
    companyName: string,
    companyLogo: string
}

export enum UpdateTypes {
    TRIP_COMPLETE,
    TRIP_STARTED,
    COMPANY_JOINED,
    COMPANY_LEFT,
    TRUCK_ISSUE_SUBMITTED
}