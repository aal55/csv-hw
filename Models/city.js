class City {
    constructor(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) {
        this.city = city;
        this.city_ascii = city_ascii;
        this.lat = lat;
        this.lng = lng;
        this.country = country;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.admin_name = admin_name;
        this.capital = capital;
        this.population = population;
        this.id = id;
    }
    static headings(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) {
        let arr = [];
        arr.push('city: ' + city, 'city_ascii: ' + city_ascii, 'lat: ' + lat, 'lng: ' + lng, 'country: ' + country, 'iso2: ' + iso2, 'iso3: ' + iso3, 'admin_name: ' + admin_name, 'capital: ' + capital, 'population: ' + population, 'id: ' + id);
        return arr;
    }
}

module.exports = City;