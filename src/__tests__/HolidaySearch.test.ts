import HolidaySearch from '../HolidaySearch';

describe('HolidaySearch class', () => {
  test('should have InputQuery property that retrives search query', () => {
    const testHolidaySearch = new HolidaySearch({
      departingFrom: 'MAN',
      travellingTo: 'AGP',
      departureDate: '2023-07-01',
      duration: 7,
    });

    expect(testHolidaySearch.InputQuery).toBe('Departing from: MAN, Travelling to: AGP, Departing date: 2023-07-01, Duration: 7 day(s)');
  });
});
