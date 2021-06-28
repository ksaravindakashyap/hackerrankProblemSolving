//Beautiful Days at the Movies

function beautifulDays(i, j, k) {
    let b =0
    let count = 0
    for(let x=i;x<=j;x++)
    {
        b = x;
        b = b + ""
        b = b.split("").reverse().join("")
        //console.log(x)
        if((Math.abs(x-b))%k===0)
        {
            count ++;
        }
    }
    return count;

}