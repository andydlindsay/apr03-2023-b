interface Pet {
  breed: string;
  species: string;
}

interface User {
  id?: number;
  pet?: Pet;
  pets?: Pet[];
  email: string;
  password: string;
  age: number;
  friends?: User[];
}

const user: User = {
  email: 'a@a.com',
  password: '1234',
  age: 42,
};

const users: User[] = [];
users.push(user);
// users.push({});