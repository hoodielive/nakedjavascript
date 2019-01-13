function sample() {
  let bestCandidate, bestDistance = 0;
  for (let i = 0; i < numCandidates; ++i) {
    let c = [Math.random() * width, Math.random() * height], 
        d = distance(findClosest(samples, c), c);
    if ( d > bestDistance) {
      bestDistance = d; 
      bestCandidate = c;
    }
  }
  return bestCandidate;
}

function distance(a, b) {
  let dx = a[0] - b[0],
      dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}


