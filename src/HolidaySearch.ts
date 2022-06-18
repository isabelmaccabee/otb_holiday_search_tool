class HolidaySearch {
  private readonly DepartingFrom: string;

  private readonly TravellingTo: string;

  private readonly DepartureDate: string;

  private readonly DurationInDays: number;

  constructor(searchQuery:
    { departingFrom: string, travellingTo: string, departureDate: string, duration: number}) {
    this.DepartingFrom = searchQuery.departingFrom;
    this.TravellingTo = searchQuery.travellingTo;
    this.DepartureDate = searchQuery.departureDate;
    this.DurationInDays = searchQuery.duration;
  }

  public get InputQuery():string {
    return `Departing from: ${this.DepartingFrom}, Travelling to: ${this.TravellingTo}`
        + `Departing date: ${this.DepartureDate}, Duration: ${this.DurationInDays} day(s)`;
  }
}

export default HolidaySearch;
