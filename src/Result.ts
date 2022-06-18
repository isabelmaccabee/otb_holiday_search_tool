type FlightInput = {
    id: number,
    airline: string,
    from: string,
    to: string,
    price: number,
    departure_date: string
}

type HotelInput = {
    id: number,
    name: string,
    arrival_date: string,
    price_per_night: number,
    local_airports: string[],
    nights: number
}

type Flight = {
    Id: number,
    DepartingFrom: string,
    TravellingTo: string,
    Price: number
}

class Result {
  public readonly Flight: Flight;

  private readonly hotel: HotelInput;

  constructor(flightInput: FlightInput, hotelInput: HotelInput) {
    this.Flight = {
        Id: flightInput.id,
        DepartingFrom: flightInput.from,
        TravellingTo: flightInput.to,
        Price: flightInput.price
    };
    this.hotel = hotelInput;
  }

  public get TotalPrice(): number {
    return this.Flight.Price + (this.hotel.price_per_night * this.hotel.nights);
  }
}

export default Result;
