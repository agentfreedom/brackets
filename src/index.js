module.exports = function check(str, bracketsConfig) {

    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const s = [];

    for (let i = 0; i < str.length; i++) {
        if (isClosedBracket(str[i])) {
            if (brackets[str[i]] !== s.pop()) return false;
        } else {
            s.push(str[i]);
        }
    }
    return s.length === 0;
}

function isClosedBracket(ch) {
    return [')', ']', '}'].indexOf(ch) > -1;
}
