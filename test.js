function outer() {
  console.log("아우터");

  return function inner() {
    return console.log("이너");
  };
}

outer();
