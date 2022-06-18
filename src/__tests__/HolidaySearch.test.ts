import HolidaySearch from '../HolidaySearch';

describe('HolidaySearch class', () => {
  const testHolidaySearch = new HolidaySearch({
    departingFrom: 'MAN',
    travellingTo: 'AGP',
    departureDate: '2023-07-01',
    duration: 7,
  });
  test('should have InputQuery property that retrives search query', () => {
    expect(testHolidaySearch.InputQuery).toBe('Departing from: MAN, Travelling to: AGP, Departing date: 2023-07-01, Duration: 7 day(s)');
  });
  test('should have Results property return list of valid flight/hotel combos', () => {
    expect(testHolidaySearch.TopResult.Flight.Id).toEqual(2);
    expect(testHolidaySearch.TopResult.Hotel.Id).toEqual(9);
  });
});
