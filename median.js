function medianOfArray(array) {
  var length = array.length

  // Odd
  if (length % 2 === 1) {
    return array[Math.floor(length / 2)]
  } else {
    // Even
    return (array[length / 2] + array[length / 2 - 1]) / 2
  }
}

// arr2 is the bigger array
function medianOfTwoSortedArray(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1
  }

  if (pos === 1) {
    return (arr1[0] + arr2[0]) / 2
  }

  if (pos === 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2
  }

  var median1 = medianOfArray(arr1)
  var median2 = medianOfArray(arr2)

  if (median1 == median2) {
    return median1
  }


  var evenOffset = pos % 2 == 0 ? 1 : 0,
      offsetMinus = Math.floor(pos / 2) - evenOffset, // 起始index
      offsetPlus = Math.floor(pos / 2) + evenOffset; // 剩下的个数

  console.log({ arr1, arr2, pos, evenOffset, offsetMinus, offsetPlus })

  if (median1 < median2) {
    console.log(arr1.slice(offsetMinus), arr2.slice(offsetMinus))
    return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(offsetMinus), offsetPlus)
  } else {
    return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(offsetMinus), offsetPlus)
  }
}

console.log(medianOfTwoSortedArray([11, 23, 24, 25, 26, 27, 28, 29, 30, 40], [32, 33, 34, 35, 36, 37, 38, 39, 50, 450], 10))