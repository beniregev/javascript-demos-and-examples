function passingCars(A) {
  let eastCars = 0, pairs = 0;

  for (const car of A) {
    if (car === 0) {
      eastCars++;
    } else {
      pairs += eastCars;
      if (pairs > 1e9) return -1;
    }
  }

  return pairs;
}

console.log(passingCars([0, 1, 0, 1, 1])); // 5
