import Result from './Result';
import { FlightInput, HotelInput } from './commonTypes';

import flightsData from './data/flights.json';
import hotelsData from './data/hotels.json';

class HolidaySearch {
  private readonly DepartingFrom: string[];

  private readonly TravellingTo: string;

  private readonly DepartureDate: string;

  private readonly DurationInDays: number;

  public readonly Results: Result[];

  constructor(searchQuery:
    { departingFrom: string[], travellingTo: string, departureDate: string, duration: number}) {
    this.DepartingFrom = searchQuery.departingFrom;
    this.TravellingTo = searchQuery.travellingTo;
    this.DepartureDate = searchQuery.departureDate;
    this.DurationInDays = searchQuery.duration;

    const validFlights = this.getValidFlights(flightsData);
    const validHotels = this.getValidHotels(hotelsData);

    const results: Result[] = [];
    validFlights.forEach((flight) => {
      validHotels.forEach((hotel) => {
        results.push(new Result(flight, hotel));
      });
    });
    this.Results = results;
  }

  public get InputQuery():string {
    return `Departing from: ${this.DepartingFrom}, Travelling to: ${this.TravellingTo}, `
        + `Departing date: ${this.DepartureDate}, Duration: ${this.DurationInDays} day(s)`;
  }

  public get FirstResult(): Result {
    return this.Results[0];
  }

  private getValidFlights(flights: FlightInput[]): FlightInput[] {
    return flights.filter((flight) => {
      const correctFromAirport = this.DepartingFrom.includes(flight.from);
      const correctToAirport = flight.to === this.TravellingTo;
      const correctDepartureDate = flight.departure_date === this.DepartureDate;
      return correctFromAirport && correctToAirport && correctDepartureDate;
    });
  }

  private getValidHotels(hotels: HotelInput[]): HotelInput[] {
    return hotels.filter((hotel) => {
      const correctArrivalDate = hotel.arrival_date === this.DepartureDate;
      const correctAirports = hotel.local_airports.includes(this.TravellingTo);
      const correctLength = hotel.nights === this.DurationInDays;
      return correctArrivalDate && correctAirports && correctLength;
    });
  }
}

export default HolidaySearch;
