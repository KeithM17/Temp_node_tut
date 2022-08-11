const Load = require ('loadash');

const items = [1,[2,[3,[4]]]]

const newItems = Load.flattenDeep(items)
console.log(newItems)