function squares(a, b) {
    const sqrtA = Math.sqrt(a)
    console.log(sqrtA);
    const floorA = Math.floor(sqrtA)
    console.log(floorA);
    const sqrtB = Math.sqrt(b)
    console.log(sqrtB);
    const ceilB = Math.floor(sqrtB)
    console.log(ceilB);
    
    let n = ceilB -  floorA
    
    if (floorA == sqrtA) {
        n += 1
    }
    
    return n
}

console.log(squares(10,30));