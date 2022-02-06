/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let cleanStore = {};
    let dirtyStore = {};
    // create two objects for clean and dirty socks
    for (const cleanSock of cleanPile) {
        cleanStore [cleanSock] = cleanStore [cleanSock] + 1 || 1;
    }
    for (const dirtySock of dirtyPile) {
        dirtyStore[dirtySock] = dirtyStore[dirtySock] + 1 || 1;
    }
    // loop to check for matching pairs
    for (const sock of Object.keys(dirtyStore)) {
        if (noOfWashes) {
            if (cleanStore [sock] % 2 === 1 && dirtyStore[sock]) {
                dirtyStore[sock] -= 1;
                cleanStore [sock] += 1;
                noOfWashes--;
            }
        }
    }
    // loop through again to check for exact pair of dirty socks
    for (const sock of Object.keys(dirtyStore)) {
        if (dirtyStore[sock] % 2 === 0) {
            if (noOfWashes > dirtyStore[sock]) {
                let washes = dirtyStore[sock];
                cleanStore [sock] = cleanStore [sock] + washes || washes;
                dirtyStore[sock] -= washes;
                noOfWashes -= washes;
            } else {
                let washes = (Math.floor(noOfWashes / 2)) * 2;
                cleanStore [sock] = cleanStore [sock] + washes || washes;
                dirtyStore[sock] -= washes;
                noOfWashes -= washes;
            }

        } else if (dirtyStore[sock] / 2 >= 1) {
            if (noOfWashes > dirtyStore[sock]) {
                let washes = Math.floor(dirtyStore[sock] / 2) * 2;
                cleanStore [sock] = cleanStore [sock] + washes || washes;
                dirtyStore[sock] -= washes;
                noOfWashes -= washes;
            } else {
                let washes = (Math.floor(noOfWashes / 2)) * 2;
                cleanStore [sock] = cleanStore [sock] + washes || washes;
                dirtyStore[sock] -= washes;
                noOfWashes -= washes;
            }
        }
    }
    let pairs = Object.values(cleanStore );
    //  get the total number of pair by adding up each pairs
    totalPair = pairs.reduce((pairs, sock) => { return pairs + (Math.floor(sock / 2)) }, 0);
    return totalPair
}




module.exports = getMaxPairs;
