function test (inputArray, ...args) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
      // push items from inputArray to result except, the ...args
      if (inputArray[i] != args) {
        result.push(inputArray[i]);
      }
    }
    return result;
  };

  alert(test([1, 2, 3, 4], 3, 4))