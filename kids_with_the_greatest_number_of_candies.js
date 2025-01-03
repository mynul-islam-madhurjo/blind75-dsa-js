function kidsWithCandies(candies, extraCandies) {
    let maxCandy = Math.max(...candies);
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandy) {
            result.push(true);
        } else {
            result.push(false)
        }
    }
    return result;
}
