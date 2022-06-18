type FlightInput = {
    id: number,
    airline: string,
    from: string,
    to: string,
    price: number,
    departure_date: string
}

type HotelInput = {
    'id': number,
    'name': string,
    'arrival_date': string,
    'price_per_night': number,
    'local_airports': string[],
    'nights': number
}

class Result {
  private readonly flight: FlightInput;

  private readonly hotel: HotelInput;

  constructor(flightInput: FlightInput, hotelInput: HotelInput) {
    this.flight = flightInput;
    this.hotel = hotelInput;
  }

  public get TotalPrice(): number {
    return this.flight.price + (this.hotel.price_per_night * this.hotel.nights);
  }
}

export default Result;
