function* getPrisoners({ name, generator }) {
  const stats = [], prisoners = generator() 

  for(;;) {
    const prisoner = prisoners.next(stats.slice()).value

    yield Object.assign({}, prisoner, {
      
      sentencedTo(years) {
        stats.push(years) 
      }
    })
  }
}

const wrappedRetaliate = getPrisoners(retaliate)

const prisoner = wrappedRetaliate.next().value 

if (prisoner.snitch()) {
  prisoner.sentencedTo(10)
}
