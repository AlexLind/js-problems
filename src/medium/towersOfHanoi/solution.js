let numberOfDiscs = 3

const minimumMoves = (numberOfDiscs) => {
    let result = Math.pow(2, numberOfDiscs) - 1;
    return result;
}

console.log(numberOfDiscs);