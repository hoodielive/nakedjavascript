const prisoners = prisoner() 
prisoners.next().value.snitch() 

function* prisoner() {
  let stats = []
  for(;;) {
    stats = yield {
      snitch() {
        return stats.pop() > 0
      } 
    } 
  }
}

function interrogate(criminal, accomplice) {
  const criminalsnitched = criminal.snitch() 
  const accomplicesnitched = accomplice.snitch() 

  if (criminalsnitched && accomplicedsnitched) {
    criminal.sentencedTo(1) 
    accomplice.sentencedTo(1)
  } else if (criminalsnitched) {
    criminal.sentencedTo(0) 
    accomplice.sentencedTo(2)
  } else if (accomplicedsnitched) {
    criminal.sentencedTo(2) 
    accomplice.sentencedTo(0)
  } else {
    criminal.sentencedTo(0) 
    accomplice.sentencedTo(0)
  }
}

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
