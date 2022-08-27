const list = (arr, n) => {
  const res = [];
  return arr.join('')
    .match(/.{1,4}/g)
    .map((el, index) => {
      if (index % 2 === 0) return el.split('').reverse().join('');
      return el;
    });
};
const list2 = (arr, n) => {
  const res = [];
  return arr.join('')
    .match(/.{1,3}/g)
    .map((el, index) => {
      if (index % 2 === 0) return el.split('').reverse().join('');
      return el;
    });
};
const wordsList = list(['МОРЖ', 'ОГУРЕЦ', 'АЗБУКА'], 4);
const wordsList2 = list2(['МЕНЮ', 'УКСУС'], 3);

export { wordsList, wordsList2 };
