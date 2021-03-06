function getMaxLessThanK(n, k) {
    let max = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let hold = (a & b);

            (hold < k && hold > max) && (max = hold);
        }
    }
 
    return max;
}
