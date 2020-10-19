module.exports = function check(str, bracketsConfig) {
  let obj ={};
  for(let i=0; i < bracketsConfig.length; i++) {
      obj[bracketsConfig[i][1]] === bracketsConfig[i][0];
  }
  let arr = str.split('');
  for(let i=0; i<str.length;i++) {
      if(arr[i] === obj[arr[i+1]]) {
          arr.splice(i,2)
          i = -1;
      }
  }
  return arr.length === 0? true:false;
};
