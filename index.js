var recipes = {}

//Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
//it does not modifythe original object, but rather returns a clone with the new data
function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]: value })
}

//updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}