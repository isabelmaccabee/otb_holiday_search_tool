import HolidaySearch from '../HolidaySearch';
import Result from '../Result';

describe('HolidaySearch class', () => {
  const testHolidaySearch1 = new HolidaySearch({
    departingFrom: ['MAN'],
    travellingTo: 'AGP',
    departureDate: '2023-07-01',
    duration: 7,
  });
  test('has InputQuery property that retrives search query', () => {
    expect(testHolidaySearch1.InputQuery).toBe('Departing from: MAN, Travelling to: AGP, Departing date: 2023-07-01, Duration: 7 day(s)');
  });
  test('has FirstResult property that returns first valid flight/hotel combo', () => {
    expect(testHolidaySearch1.FirstResult.Flight.Id).toEqual(2);
    expect(testHolidaySearch1.FirstResult.Hotel.Id).toEqual(9);
  });
  test('has Results property that returns list of valid flight/hotel combos with simple single result', () => {
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
  test('has Results property that combines all valid flight and hotels into combos', () => {
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
    expect(testHolidaySearch2.Results).toEqual(expect.arrayContaining(validResults));
  });
  test('has Results property that orders the flight/hotel combos by price (low to high)', () => {
    const testHolidaySearch2 = new HolidaySearch({
      departingFrom: ['LGW'],
      travellingTo: 'AGP',
      departureDate: '2023-07-01',
      duration: 7,
    });

    const result1 = testHolidaySearch2.Results[0];
    const result2 = testHolidaySearch2.Results[1];

    expect(result1.TotalPrice).toBeLessThan(result2.TotalPrice);
  });
  test('handles multiple departure airport options', () => {
    const testHolidaySearch3 = new HolidaySearch({
      departingFrom: ['LTN', 'LGW'],
      travellingTo: 'PMI',
      departureDate: '2023-06-15',
      duration: 10,
    });

    const validFlight1 = {
      id: 4,
      airline: 'Trans American Airlines',
      from: 'LTN',
      to: 'PMI',
      price: 153,
      departure_date: '2023-06-15',

    };
    const validFlight2 = {
      id: 6,
      airline: 'Fresh Airways',
      from: 'LGW',
      to: 'PMI',
      price: 75,
      departure_date: '2023-06-15',
    };

    const validHotel1 = {
      id: 5,
      name: 'Sol Katmandu Park & Resort',
      arrival_date: '2023-06-15',
      price_per_night: 60,
      local_airports: ['PMI'],
      nights: 10,
    };
    const validHotel2 = {
      id: 13,
      name: 'Jumeirah Port Soller',
      arrival_date: '2023-06-15',
      price_per_night: 295,
      local_airports: ['PMI'],
      nights: 10,
    };

    const result1 = new Result(validFlight1, validHotel1);
    const result2 = new Result(validFlight1, validHotel2);
    const result3 = new Result(validFlight2, validHotel1);
    const result4 = new Result(validFlight2, validHotel2);

    expect(testHolidaySearch3.Results).toEqual(
      expect.arrayContaining([result1, result2, result3, result4]),
    );
  });
});
