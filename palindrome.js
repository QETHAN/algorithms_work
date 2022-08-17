function isPalindrome(num) {
  if (num < 0) {
      return false
  }

  let div = 1

  while (num / div >= 10) {
      div *= 10
  }

  console.log(div)

  while (num > 0) {
      let left = Math.floor(num / div)
      let right = num % 10
console.log({ left, right })
      if (left !== right) {
          return false
      }

      num = Math.floor((num - left * div) / 10)
      console.log({ num })
      div = Math.floor(div / 100)
  }

  return true
} 

// console.log(isPalindrome(10000001))
console.log(isPalindrome(34543))