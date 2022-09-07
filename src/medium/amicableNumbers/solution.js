input = 220

const amicableNumbers = (input) => {
    let result = []
    for (let i = 1; i < input; i++) {
        console.log(i)
        if (Number.isInteger(input / i)) {
            result.push(i)
        }
        }
        return result.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0);
    }
console.log(amicableNumbers(input))