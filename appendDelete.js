function appendAndDelete(s, t, k) {

    for(var i=0;i<s.length,i!==t.length;i++)
    {
        if(k<=(s.length-t.length))
        {
            return "No"
        }
        if(s[i] === t[i])
        {
            continue;
        }
        else if(s[i]!==t[i])
        {
            --i
            break;
        }
    }
    console.log(i)
    let x = Math.abs(((i+1) - (s.length)));
    console.log(x)
    let y = Math.abs((i+1) - (t.length));
    console.log(y)
    if(s.length < t.length)
    {
        if(s.length < k)
        {
            return "No"
        }
        else 
        {
            return "Yes"
        }
    }
   if((x+y) <= k)
        {
            return "Yes"
        }
        else if((x+y) > k)
        {
            return "No"
        }

}
