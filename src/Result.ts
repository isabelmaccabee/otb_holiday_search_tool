import { FlightInput, HotelInput } from './commonTypes';

type Flight = {
    Id: number,
    DepartingFrom: string,
    TravellingTo: string,
    Price: number
}

type Hotel = {
    Id: number,
    Name: string,
    PricePerNight: number,
    Nights: number
}

class Result {
  public readonly Flight: Flight;

  public readonly Hotel: Hotel;

  constructor(flightInput: FlightInput, hotelInput: HotelInput) {
    this.Flight = {
      Id: flightInput.id,
      DepartingFrom: flightInput.from,
      TravellingTo: flightInput.to,
      Price: flightInput.price,
    };
    this.Hotel = {
      Id: hotelInput.id,
      Name: hotelInput.name,
      PricePerNight: hotelInput.price_per_night,
      Nights: hotelInput.nights,
    };
  }

  public get TotalPrice(): string {
    const priceAsNum = this.Flight.Price + (this.Hotel.PricePerNight * this.Hotel.Nights);
    return `£${priceAsNum.toFixed(2)}`;
  }
}

export default Result;
