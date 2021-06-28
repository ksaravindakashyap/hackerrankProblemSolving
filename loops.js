//Day 2: Loops

function vowelsAndConsonants(s) {
    for(var t = 0; t<s.length ; t++)
        {
            if(s[t] === 'a'||s[t] === 'e' || s[t] === 'i' || s[t] === 'o' || s[t] ==='u')
            {
                console.log(s[t]);
            }
        }
    for(var t = 0; t<s.length ; t++)
        {
            if(!(s[t] === 'a'||s[t] === 'e' || s[t] === 'i' || s[t] === 'o' || s[t] ==='u'))
            {
                console.log(s[t]);
            }
        }
}