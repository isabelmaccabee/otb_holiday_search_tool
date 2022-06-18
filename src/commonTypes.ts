export type FlightInput = {
    id: number,
    airline: string,
    from: string,
    to: string,
    price: number,
    departure_date: string
}

export type HotelInput = {
    id: number,
    name: string,
    arrival_date: string,
    price_per_night: number,
    local_airports: string[],
    nights: number
}
