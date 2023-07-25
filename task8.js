function secondSmallest(array) {
    const sorted = array.sort()
    let secondSmallest = sorted[1] ;
    return secondSmallest;
  }
  console.log(secondSmallest([13,19,30,12,15,11]))