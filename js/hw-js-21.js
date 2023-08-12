// #1 Methods: flatMap, compact
const arr1 = [
    1,
    0,
    false,
    20,
    40,
    [50],
    [false, true],
    [undefined, null],
    undefined,
  ];
  const flatMapLodash = _.flatMap(arr1, (elem) => elem);
  const compactLodash = _.compact(flatMapLodash);
  console.log(compactLodash);
  
  // #2 Method: pull
  const arr2 = [2, 2, 3, 6, 6, 7, 3, 9, 1, 1, 1];
  const pullLodash = _.pull([...arr2], 9, 2, 7);
  console.log(pullLodash);
  
  // #3 Method: zip
  const zipLodash = _.zip([1, -1], [true, false]);
  console.log(zipLodash);
  
  // #4 Method: size
  const sizeLodash = _.size({
    name: "jdj",
    age: 22,
    surname: "jdkwk",
  });
  console.log(sizeLodash);
  
  // #5 Method: delay
  const delayLodash = _.delay((text) => console.log(text), 1000, "Delay 1s");
  console.log(delayLodash);
  
  // #6 Method: flip, toArray
  const flippedLodash = _.flip(function () {
    return _.toArray(arguments);
  });
  console.log(
    flippedLodash(1, 2, 3, 4, 5, "fkkw", "kwknv", "kw", true, false, undefined)
  );
  
  // #7 Method: overArgs
  const doubled = (param) => param * 2;
  const square = (param) => param * param;
  const overArgsLodash = _.overArgs((a, b) => [a, b], [square, doubled]);
  console.log(overArgsLodash(9, 3));
  
  // #8 Method: castArray
  const castArrayLodash = _.castArray({
    a: 10,
  });
  console.log(castArrayLodash);
  
  // #9 Method: Memoize, values
  const obj = {
    a: 1,
    b: 2,
    c: null,
    d: undefined,
    e: true,
  };
  const memoizeLodash = _.memoize(_.values);
  console.log(memoizeLodash(obj));
  
  // #10 Method: isArray
  const isArrayLodash = _.isArray({
    a: 10,
    b: 20,
  });
  console.log(isArrayLodash);
  
  // #11 Method: words
  const wordsLodash = _.words(
    "Julia, Tatiana, Senya, Illya, Michael, Ruslan, Yakov"
  );
  console.log(wordsLodash);
  
  // #12 Method: truncate
  const truncateLodash = _.truncate("hdhjjeiixnwnsnmkd", {
    length: 10,
  });
  console.log(truncateLodash);
  
  // #13 Method: repeat
  const repeatLodash = _.repeat([1, 2, 3, ""], 3);
  console.log(repeatLodash);
  
  // #14 Method: toString
  const toStringLodash = _.toString([1, 2, 3, null, undefined]);
  console.log(toStringLodash);
  
  // #15 Method: sample
  const sampleLodash = _.sample([482, 584, 194, 195, 1048, 5619, 808]);
  console.log(sampleLodash);
  
  // #16 Method: fromPairs
  const fromPairsLodash = _.fromPairs([
    ["a", 5],
    ["b", 10],
    ["c", 100],
  ]);
  console.log(fromPairsLodash);
  
  // #17 Method: flattenDepth
  const arr3 = [1, 2, [3, 4, [5, 6, 7, ['hello', 'buy']], 8, 9], 10];
  const flattenDepthLodash = _.flattenDepth(arr3, 2);
  console.log(flattenDepthLodash);
  
  // #18 Method: sum
  const sumLodash = _.sum([92, 735, 134, 863, 531, 8562, 927]);
  console.log(sumLodash);
  
  // #19 Method: multiply
  const multiplyLodash = _.multiply(34, 34);
  console.log(multiplyLodash);
  
  // #20 Method: fill
  const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fillLodash = _.fill(arr4, 'helo');
  console.log(fillLodash);