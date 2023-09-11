/*
* В программировании иногда приходится иметь дело с деньгами. В отличие от большинства других значений, деньги могут существовать в разных валютах, которые конвертируются друг в друга по определенным ставкам (они меняются со временем!). Из-за этого, часто, недостаточно просто хранить количество денег, нужно хранить и их валюту.

Достаточно давно разработчики заметили, что работа с деньгами происходит во всех проектах примерно одинаково. Это привело к созданию определенного подхода (шаблона проектирования) при работе с деньгами. В этом задании мы частично реализуем его.
Money.js

Реализуйте и экспортируйте по умолчанию абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод. Список методов:

    Money(value, currency = 'usd') – создает объект-деньги.
    Money.prototype.getValue() – возвращает стоимость в виде числа
    Money.prototype.getCurrency() – возвращает валюту денег
    Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
    Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
    Money.prototype.format() – возвращает локализованное представление денег удобное для вывода

const money1 = new Money(100);



// Возвращает значение

money1.getValue(); // 100

money1.getCurrency(); // 'usd'



// Конвертирует в указанную валюту и возвращает новое значение

money1.exchangeTo('eur').getValue(); // 70



const money2 = new Money(200, 'eur');

money2.getValue(); // 200

const money3 = money2.add(money1);

money3.getValue(); // 270

const money4 = money3.add(money1);

money4.getValue(); // 340



money1.format(); // "$100.00"

money2.format(); // "€200.00"



const money5 = new Money(10000);

money5.format(); // "$10,000.00"

Наша реализация поддерживает только две валюты: usd и eur без возможности расширения. Коэффициенты конверсии:

    usd -> eur = 0.7
    eur -> usd = 1.2
* */

function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function () {
    return this.value;
};

Money.prototype.getCurrency = function () {
    return this.currency;
};

Money.prototype.exchangeTo = function (targetCurrency) {
    if (this.currency === targetCurrency) {
        return new Money(this.value, this.currency);
    }

    let convertedValue;
    if (this.currency === 'usd' && targetCurrency === 'eur') {
        convertedValue = this.value * 0.7;
    } else if (this.currency === 'eur' && targetCurrency === 'usd') {
        convertedValue = this.value * 1.2;
    } else {
        throw new Error('Unsupported currency conversion');
    }

    return new Money(convertedValue, targetCurrency);
};

Money.prototype.add = function (money) {
    if (this.currency !== money.getCurrency()) {
        money = money.exchangeTo(this.currency);
    }

    const newValue = this.value + money.getValue();
    return new Money(newValue, this.currency);
};

Money.prototype.format = function () {
    const options = {
        style: 'currency',
        currency: this.currency,
        minimumFractionDigits: 2,
    };
    return this.value.toLocaleString(undefined, options);
};

export default Money;