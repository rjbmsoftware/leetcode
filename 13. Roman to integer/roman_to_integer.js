/**
 * I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Convert roman numerals to integers
 */

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let total = 0, maxValueSeen = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let currentValue = numeralToInteger(s.charAt(i));
        if (currentValue >= maxValueSeen) {
            total += currentValue;
            maxValueSeen = currentValue;
        } else {
            total -= currentValue;
        }
    }

    return total;
};

function numeralToInteger(numeral) {
    switch (numeral) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}


console.log(romanToInt('XIII')); // 13 ascending values only
console.log(romanToInt('IV')); // 4 descending value simple