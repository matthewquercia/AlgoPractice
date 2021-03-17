/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes = boxTypes.sort((a, b) => { return b[1] - a[1] });
    let units = 0;

    for (let i = 0; i < boxTypes.length; i++) {
        if (truckSize > 0) {
            if (boxTypes[i][0] <= truckSize) {
                units += (boxTypes[i][0] * boxTypes[i][1]);
                truckSize = truckSize - boxTypes[i][0];
            } else {
                units += (boxTypes[i][1] * truckSize)
                break;
            }
        }
    }

    return units;
};

console.log(maximumUnits([[1, 3], [2, 2], [3, 1]], 4)); //8
console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10)); //91


//50 + 27 + 14 = 91