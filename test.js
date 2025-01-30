const test = {
  0: "a",
  1: "b",
  get length() {
    return Object.keys(this).length - 1; // this는 test 객체를 참조
  },
};

const s = new Set();

s.add(...[1, 2, 3]);

console.log(s);
