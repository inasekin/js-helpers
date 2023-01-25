/*
Реализуйте и экспортируйте набор функций, для работы со словарём, построенным
на хеш-таблице. Для простоты, наша реализация не поддерживает разрешение коллизий.
По сути в этом задании надо реализовать объекты. По понятным причинам использовать
объекты для создания объектов нельзя. Представьте что в языке объектов нет и мы их
хотим добавить.
-- make() — создаёт новый словарь
-- set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для
создания и для изменения. Функция возвращает true, если удалось установить значение.
При возникновении коллизии, функция никак не меняет словарь и возвращает false.
-- get(map, key, defaultValue = null) — возвращает значение указанного ключа.
Параметр defaultValue — значение, которое функция возвращает, если в словаре нет
ключа (по умолчанию равно null). При возникновении коллизии функция также возвращает
значение по умолчанию.
Функции set() и get() принимают первым параметром словарь. Передача идёт по ссылке,
поэтому set() может изменить его напрямую.
*/

import crc32 from 'crc-32';

const make = () => [];

const set = (map, key, value) => {
    const hash = crc32.str(key);
    const current = map[hash];
    if (current) {
        const [currentKey, currentVal] = current;
        if (currentKey !== key)
            return false;
        current[1] = value;
    }
    map[hash] = [key, value];
    return true;
};

const get = (map, key, value = null) => {
    const hash = crc32.str(key);
    const current = map[hash];
    if (current) {
        const [currentKey, currentVal] = current;
        if (currentKey !== key)
            return value;
        return currentVal;
    }
    return value;
};

const map = make();

let result = get(map, 'key');

console.log(result); // => null



result = get(map, 'key', 'default_value');

console.log(result); // => "default_value"



set(map, 'key2', 'value2');

result = get(map, 'key2');

console.log(result); // => "value2"
