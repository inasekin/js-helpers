// Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает на вход список городов и стран, нормализует их имена, сортирует города и группирует их по стране.
//
// const countries = [
//     { name: 'Miami', country: 'usa' },
//     { name: 'samarA', country: '  ruSsiA' },
//     { name: 'Moscow ', country: ' Russia' },
// ];
//
// normalize(countries);
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }

function normalize(cities) {
    const result = {};

    for (const cityObj of cities) {
        const cityName = cityObj.name.trim().toLowerCase();
        const countryName = cityObj.country.trim().toLowerCase();

        if (!result[countryName]) {
            result[countryName] = new Set(); // Используем Set для хранения уникальных имен городов
        }

        result[countryName].add(cityName); // Добавляем имя города в Set
    }

    // Преобразуем Set в массив и сортируем
    for (const country in result) {
        result[country] = Array.from(result[country]).sort();
    }

    return result;
}

export default normalize;