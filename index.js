var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


var newObj = Object.assign({}, obj)
var obj = { key: value }

function deleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  delete newObj[key]
=======
  delete newObj.key
>>>>>>> 30ac6e899b0d97f3703a1cfd60972ac37f419059
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
<<<<<<< HEAD
  delete object[key];
=======
  delete object.key;
>>>>>>> 30ac6e899b0d97f3703a1cfd60972ac37f419059
  return object;
}