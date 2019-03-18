let firstFunction = function () {
  return new Promise(function (resolve, reject) {
    resolve('your cat is ');
  });
}

let secondFunction = function (dataFromFirstFunc) {
  return new Promise(function (resolve, reject) {
    resolve(resolve(dataFromFirstFunction + 'crazy'))
  });
}

