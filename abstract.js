function Rec(count, limit, sum) {
  if (count === limit) {
    sum = sum + count
    console.log(sum)
    return
  }
  sum = sum + count
  count++
  Rec(count, limit, sum)
}

Rec(0, 4, 0)
