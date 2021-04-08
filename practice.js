function countdown(startValue, callback) {
  for (let i = startValue; i > 0; i--) {
    console.log(i)
    if (i === 1) {
      callback()
    }
  }
}

countdown(10, () => {
  console.log('BLAST OFF!')
})
countdown(3, () => {
  console.log('GO!')
})
countdown(4, () => {
  console.log('Disco!')
})
