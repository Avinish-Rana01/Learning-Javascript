function createFunctions() {
  var a = [];

  for (var i = 0; i < 3; i++) {
    a.push(function () {
      console.log(i);
    });
  }

  return a;
}

const arr = createFunctions();

arr[0]();
arr[1]();
arr[2]();
console.log(createFunctions());