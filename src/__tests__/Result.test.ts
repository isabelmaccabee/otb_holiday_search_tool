import Result from '../Result';

describe('Results class', () => {
  test('should have TotalPrice property returning sum of flight + hotel', () => {
    const testFlight = {
      id: 1,
      airline: 'First Class Air',
      from: 'MAN',
      to: 'TFS',
      price: 470,
      departure_date: '2023-07-01',
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

    expect(testResult.TotalPrice).toBe(1170);
  });
});
