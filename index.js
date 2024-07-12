function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
}
  
function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = Array.isArray(collection) ? collection[0] : collection[Object.keys(collection)[0]];
      startIdx = 1;
    }
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
    return acc;
  }
  
  
  
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  
  
  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  function myValues(obj) {
    return Object.values(obj);
  }
