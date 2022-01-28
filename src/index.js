module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  let arr = str.split('');


  let u1 = '()';
  let u2 = '[]';
  let u3 = '{}';
  let u4 = '||';
  let u5 = '12';
  let u6 = '34';
  let u7 = '56';
  let u8 = '77';
  let u9 = '88';

  for (let z = 0; z < 500; z++) {
    arr.map((item, i) => {

      if (`${arr[i]}${arr[i + 1]}` === u1 || `${arr[i]}${arr[i + 1]}` === u2 || `${arr[i]}${arr[i + 1]}` === u3 || `${arr[i]}${arr[i + 1]}` === u4 || `${arr[i]}${arr[i + 1]}` === u5 || `${arr[i]}${arr[i + 1]}` === u6 || `${arr[i]}${arr[i + 1]}` === u7 || `${arr[i]}${arr[i + 1]}` === u8 || `${arr[i]}${arr[i + 1]}` === u9) {
        arr.splice(i, 2)
      }
    })
  }
  if (arr.length > 0) {
    return false
  } else {
    return true
  }
}