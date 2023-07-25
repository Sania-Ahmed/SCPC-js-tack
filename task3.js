const findMostFrequentElement = (array) => {
    let mostFrequentElement = array[0];
    let mostFrequentCount = 1;
  
    for (let i = 1; i < array.length; i++) {
      let currentCount = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          currentCount++;
        }
      }
      if (currentCount > mostFrequentCount) {
        mostFrequentElement = array[i];
        mostFrequentCount = currentCount;
      }
    }
  
    return mostFrequentElement;
  };
  
  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5, 3];
  const mostFrequentElement = findMostFrequentElement(array);
  console.log(mostFrequentElement); 