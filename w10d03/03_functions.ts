// arguments, return value, name of the function
const sayHello = (name: string, age: number = 100): boolean => {
  return false;
};

sayHello('alice', 42);
sayHello('alice');

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(42).then((data) => {});

const returningNothing = (): void => {
  console.log('hello');
};