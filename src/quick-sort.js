const partition = (list) => {
  if (list.length < 2) {
    return list
  }

  let left = []
  let right = []
  let pivot = list[0]

  list.shift()

  for (let i = 0; i < list.length; ++i) {
    list[i] <= pivot ? left.push(list[i]) : right.push(list[i])
  }

  return [].concat(partition(left), [pivot], partition(right))
}

export default function quicksort(list) {
  return partition(list)
}
