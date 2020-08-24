const generateKey = (args: any[]): string => args.toString();

const memo = fn => {
  const cache = {};

  return (...args) => {
    const key = generateKey(args);

    if (key in cache) {
      return cache[key];
    } else {
      const newValue = fn(...args);
      cache[key] = newValue;

      return newValue;
    }
  }
}

const calculateSum = (numbers: number[]): number => {
  console.log('calculate...');

  return numbers.reduce((acc: number, num: number) => acc + num, 0);
}

const getList = memo(() => {
  console.log('getting list...');

  return [1,2,3,4,5];
})

const memoizedCalculateSum  = memo(calculateSum);

console.log(memoizedCalculateSum([10,10]));
console.log(memoizedCalculateSum([10,10]));

console.log(getList());
console.log(getList());