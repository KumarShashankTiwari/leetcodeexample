/**
 * @param {string} s
 * @return {number}
 */

     const count = (val) => {
        if (val === 'M') return 1000;
        if (val === 'V') return 5;
        if (val === 'X') return 10;
        if (val === 'L') return 50;
        if (val === 'C') return 100;
        if (val === 'D') return 500;
        if (val === 'I') return 1;
        else return 0
    }
    var romanToInt = function (s) {
        let temp = 0;
        for (let i = 0; i < s.length; i++) {
            if (count(s[i]) >= count(s[i + 1]))
                temp = temp + count(s[i]);
            else {
                temp = temp + (count(s[i + 1]) - count(s[i]));
                i = i + 1;
            }
        }
        return temp;
    
    };
        const answer=romanToInt("MCMXCIV");
        console.log("answer",answer);