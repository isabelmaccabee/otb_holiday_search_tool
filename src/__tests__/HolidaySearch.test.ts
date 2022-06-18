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
  test('should have FirstResult property that returns first valid flight/hotel combo', () => {
    expect(testHolidaySearch1.FirstResult.Flight.Id).toEqual(2);
    expect(testHolidaySearch1.FirstResult.Hotel.Id).toEqual(9);
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
  test('should have Results property that combines all valid flight and hotels into combos', () => {
    const testHolidaySearch2 = new HolidaySearch({
      departingFrom: ['LGW'],
      travellingTo: 'AGP',
      departureDate: '2023-07-01',
      duration: 7,
    });

    const validHotel = {
      id: 9,
      name: 'Nh Malaga',
      arrival_date: '2023-07-01',
      price_per_night: 83,
      local_airports: ['AGP'],
      nights: 7,
    };

    const validFlight1 = {
      id: 10,
      airline: 'First Class Air',
      from: 'LGW',
      to: 'AGP',
      price: 225,
      departure_date: '2023-07-01',
    };

    const validResult1 = new Result(validFlight1, validHotel);

    const validFlight2 = {
      id: 11,
      airline: 'First Class Air',
      from: 'LGW',
      to: 'AGP',
      price: 155,
      departure_date: '2023-07-01',
    };

    const validResult2 = new Result(validFlight2, validHotel);
    const validResults = [validResult1, validResult2];

    expect(testHolidaySearch2.Results).toHaveLength(2);
    expect(testHolidaySearch2.Results).toEqual(validResults);
  });
});
