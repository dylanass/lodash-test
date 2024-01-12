// 方法一：
import _ from 'lodash'
const merge = _.merge;
const mergeWith = _.mergeWith;
// 方法二：
// import merge from 'lodash.merge'
// import mergeWith from 'lodash.mergewith'
// 方法三：
// import merge from 'lodash/merge'
// import mergeWith from 'lodash/mergewith'
// 方法四
// import { mergeWith, merge } from 'lodash-es';

// const object = {
//   'a': [{ 'b': 2 }, { 'd': 4 }]
// };

// const other = {
//   'a': [{ 'c': 3 }, { 'e': 5 }]
// };

// function customizer (objValue, srcValue) {
//   if (Array.isArray(objValue)) {
//     return objValue.concat(srcValue);
//   }
// }

// console.log(merge(object, other));
// console.log(mergeWith(object, other, customizer));

