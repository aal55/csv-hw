const City = require('../Models/city');

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});

test('Reads a csv file', () => {
    expect(City.headings('Tokyo', 'Tokyo', '35.6850', '139.7514', 'Japan', 'JP', 'JPN', 'Tōkyō', 'primary', '35676000', '1392685764')).toMatchObject(Array(
        'city: Tokyo',
        'city_ascii: Tokyo',
        'lat: 35.6850',
        'lng: 139.7514',
        'country: Japan',
        'iso2: JP',
        'iso3: JPN',
        'admin_name: Tōkyō',
        'capital: primary',
        'population: 35676000',
        'id: 1392685764')
    );
});

test('Contains the same amount of values', () => {
    expect(City.headings('Tokyo', 'Tokyo', '35.6850', '139.7514', 'Japan', 'JP', 'JPN', 'Tōkyō', 'primary', '35676000', '1392685764').length).toBe(11);
});

test('Records are the same type', () => {
    expect(City.headings('Tokyo', 'Tokyo', '35.6850', '139.7514', 'Japan', 'JP', 'JPN', 'Tōkyō', 'primary', '35676000', '1392685764')[0]).toBe('city: Tokyo');
});