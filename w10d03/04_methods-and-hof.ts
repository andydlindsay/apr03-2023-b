interface Writer {
  penName: string;
  realName: string;
  writeBook: (title: string) => boolean;
}

const agatha: Writer = {
  penName: 'agatha christie',
  realName: 'alice bob',
  writeBook: (title: string) => {
    return true;
  }
};

const hof = (callback: (num: number) => string) => {
  const returnVal = callback(42);
};

hof((winningLottoNumber: number) => { return 'hello' });
