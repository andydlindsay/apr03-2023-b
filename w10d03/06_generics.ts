interface Container<T> {
  name: string;
  contents: T;
  arr?: T[];
  // func?: (t: type) => another;
}

const stringContainer: Container<string> = {
  name: 'string container',
  contents: 'also a string'
};

const booleanContainer: Container<boolean> = {
  name: 'boolean container',
  contents: true
};
