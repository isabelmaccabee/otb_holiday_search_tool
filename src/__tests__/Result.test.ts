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

  test('should have TotalPrice property returning sum of flight + hotel', () => {
    expect(testResult.TotalPrice).toBe(1170);
  });
  test('should have flight properties: Id, DepartingFrom, TravellingTo', () => {
    expect(testResult.Flight.Id).toBe(1);
    expect(testResult.Flight.DepartingFrom).toBe('MAN');
    expect(testResult.Flight.TravellingTo).toBe('TFS');
  });
});
