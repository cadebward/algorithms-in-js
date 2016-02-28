const merge = (left, right) => {
  let results = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  while (left.length) {
    results.push(left.shift())
  }

  while (right.length) {
    results.push(right.shift())
  }

  return results
}

const mergesort = (list) => {
  if (list.length < 2) {
    return list
  }

  let middle = Math.floor(list.length / 2)
  let left = list.slice(0, middle)
  let right = list.slice(middle)

  return merge(mergesort(left), mergesort(right))
}

export default mergesort
