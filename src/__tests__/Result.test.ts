import Result from '../Result';

describe('Results class', () => {
  const testFlight = {
    id: 1,
    airline: 'First Class Air',
    from: 'MAN',
    to: 'TFS',
    price: 470,
    departure_date: '2022-11-05',
  };

  const testHotel = {
    id: 1,
    name: 'Iberostar Grand Portals Nous',
    arrival_date: '2022-11-05',
    price_per_night: 100,
    local_airports: ['TFS'],
    nights: 7,
  };

  const testResult = new Result(testFlight, testHotel);

  test('has TotalPrice property returning sum of flight + hotel', () => {
    expect(testResult.TotalPrice).toBe('£1170.00');
  });
  test('handles TotalPrice property to 2 decimals', () => {
    const testFlightWithDecimals = {
      id: 1,
      airline: 'First Class Air',
      from: 'MAN',
      to: 'TFS',
      price: 470.10,
      departure_date: '2022-11-05',
    };

    const testHotelWithDecimals = {
      id: 1,
      name: 'Iberostar Grand Portals Nous',
      arrival_date: '2022-11-05',
      price_per_night: 100.30,
      local_airports: ['TFS'],
      nights: 7,
    };

    const testResult2 = new Result(testFlightWithDecimals, testHotelWithDecimals);

    expect(testResult2.TotalPrice).toBe('£1172.20');
  });
  test('has flight properties: Id, DepartingFrom, TravellingTo', () => {
    expect(testResult.Flight.Id).toBe(1);
    expect(testResult.Flight.DepartingFrom).toBe('MAN');
    expect(testResult.Flight.TravellingTo).toBe('TFS');
  });
  test('has Hotel properties: Id, Name, Price', () => {
    expect(testResult.Hotel.Id).toBe(1);
    expect(testResult.Hotel.Name).toBe('Iberostar Grand Portals Nous');
    expect(testResult.Hotel.PricePerNight).toBe(100);
  });
});
