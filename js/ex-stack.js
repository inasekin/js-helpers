// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.
//
//     Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
//
//     Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
//     Скобки должны закрываться в правильном порядке.
//
//     import isBracketStructureBalanced from './strings.js';
//
// // Пример вложенности
//
// isBracketStructureBalanced('(>');  // false
// isBracketStructureBalanced('()');  // true
// isBracketStructureBalanced('[()]');  // true
// isBracketStructureBalanced('({}[])');  // true
// isBracketStructureBalanced('{<>}}'); // false
// isBracketStructureBalanced('([)]'); // false
//
// Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.

import _ from 'lodash';

const isBracketStructureBalanced = (brackets) => {
    const openingBrackets = ['(', '[', '{', '<'];
    const closingBrackets = [')', ']', '}', '>'];
    const stack = [];

    for (const bracket of brackets) {
        if (openingBrackets.includes(bracket)) {
            stack.push(openingBrackets.indexOf(bracket));
        } else if (_.last(stack) === closingBrackets.indexOf(bracket)) {
            stack.pop();
        } else return false;
    }
    return stack.length === 0;
};

export default isBracketStructureBalanced;