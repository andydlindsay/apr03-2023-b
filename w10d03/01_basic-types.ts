let username: string | number | boolean = 'alice';

username = 'bob';
username = 42;
username = false;

const myArr: (string | number)[] = [];

myArr.push('hello');
myArr.push(42);
// myArr.push(42);
// myArr.push(true);

const result = myArr.pop();

