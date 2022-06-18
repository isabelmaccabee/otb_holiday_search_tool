import HolidaySearch from '../HolidaySearch';
import Result from '../Result';

describe('HolidaySearch class', () => {
  const testHolidaySearch1 = new HolidaySearch({
    departingFrom: ['MAN'],
    travellingTo: 'AGP',
    departureDate: '2023-07-01',
    duration: 7,
  });
  test('should have InputQuery property that retrives search query', () => {
    expect(testHolidaySearch1.InputQuery).toBe('Departing from: MAN, Travelling to: AGP, Departing date: 2023-07-01, Duration: 7 day(s)');
  });
  test('should have TopResult property that returns first valid flight/hotel combo', () => {
    expect(testHolidaySearch1.TopResult.Flight.Id).toEqual(2);
    expect(testHolidaySearch1.TopResult.Hotel.Id).toEqual(9);
  });
  test('should have Results property that returns list of valid flight/hotel combos with simple single result', () => {
    const validFlight = {
      id: 2,
      airline: 'Oceanic Airlines',
      from: 'MAN',
      to: 'AGP',
      price: 245,
      departure_date: '2023-07-01',
    };

    const validHotel = {
      id: 9,
      name: 'Nh Malaga',
      arrival_date: '2023-07-01',
      price_per_night: 83,
      local_airports: ['AGP'],
      nights: 7,
    };

    const validResult = new Result(validFlight, validHotel);

    expect(testHolidaySearch1.Results).toHaveLength(1);
    expect(testHolidaySearch1.Results).toEqual([validResult]);
  });
});
