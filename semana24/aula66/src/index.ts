// ----------- ex 1
// ------ a)
const printNumbersAscending = (integer: number) => {
    if (integer >= 0) {
      printNumbersAscending(integer - 1)
      console.log(integer)
    }
}

console.log(printNumbersAscending(2))

// ------ b)
const printNumbersDescending = (integer: number) => {
    if (integer >= 0) {
      console.log(integer)
      printNumbersDescending(integer - 1)
    }
}

console.log(printNumbersDescending(3))

// ----------- ex 2
const sum = (integer: number): number => {
    if (integer === 0) {
      return 0
    }
    return integer + sum(integer - 1);
}

console.log(sum(4))

// ----------- ex 3
const sumIterative = (integer: number) => {
    let sum = 0
    for (let i = 0 ; i <= integer; i++) {
        sum += i
  }
  return sum
}

console.log(sumIterative(4))

// ----------- ex 4
const printArray = (array: number[], index: number = 0) => {
    if (index < array.length) {
      console.log(array[index])
      printArray(array, index + 1)
      
    }
}

console.log(printArray([1,2,3,4,5]))

// ----------- ex 5
const getDigits = (number: number, digits: number = 1): number => {
    if (number < 10) {
      return digits
    }
    return getDigits(number / 10, digits + 1)
}

console.log(getDigits(0))
console.log(getDigits(10))
console.log(getDigits(12020))
  
// ----------- ex 6
const getLargestNumber = (array: number[], index: number = 0, largest: number = 0): number => {
    if (index < array.length) {
        if (array[index] > largest) {
            largest = array[index]
        }

        return getLargestNumber(array, index + 1, largest)
    }

    return largest
}

console.log(getLargestNumber([34, 21, 42, 13, 72, 64, 100]))

// ----------- ex 7
const findCapitalLetter = (string: string, char: string = ""): string => {
    if (char && char.toUpperCase() === char && char !== " ") {
        return char;
      }
      return findCapitalLetter(string.substring(1), string[0]);
}

console.log(findCapitalLetter("potaTo"))

// ----------- ex 8

// O(b) porque depende de b

// ----------- ex 9

// O(2^n) porque tem n??

