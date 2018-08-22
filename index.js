var recipes = {}

//Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
//it does not modifythe original object, but rather returns a clone with the new data
function updateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return recipes
  }
function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, obj, { [key]: value })
}
