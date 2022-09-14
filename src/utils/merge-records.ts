// https://stackoverflow.com/questions/7146217/merge-2-arrays-of-objects

interface Obj {
  name: string
  value: any
}

// Convert to key value dictionary or object
const convertToKeyValueDict = (arrayObj: Array<Obj>) => {
  const val: { [key: string]: any } = {}
  arrayObj.forEach(obj => {
    val[obj.name] = obj.value
  })
  return val
}

// update or merge array
const mergeRecords = (a1: Array<Obj>, a2: Array<Obj>) => {
  const obj1 = convertToKeyValueDict(a1)
  const obj2 = convertToKeyValueDict(a2)
  // Note: Spread operator with objects used here
  const merged_obj = { ...obj1, ...obj2 }
  const val = Object.entries(merged_obj)
  return val.map(obj => ({ name: obj[0], value: obj[1] }))
}

export default mergeRecords
