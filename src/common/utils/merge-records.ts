// https://stackoverflow.com/questions/7146217/merge-2-arrays-of-objects

type Obj = {
  name: string
  value: any
}

type KeyValueDict = Record<string, any>

// Convert to key value dictionary or object
const convertToKeyValueDict = (arrayObj: Obj[]): KeyValueDict => {
  const val: KeyValueDict = {}
  arrayObj.forEach(obj => {
    val[obj.name] = obj.value
  })
  return val
}

// Update or merge array
export const mergeRecords = (a1: Obj[], a2: Obj[]) => {
  const obj1 = convertToKeyValueDict(a1)
  const obj2 = convertToKeyValueDict(a2)
  // Note: Spread operator with objects used here
  const merged_obj = { ...obj1, ...obj2 }
  const val = Object.entries(merged_obj)
  return val.map(obj => ({ name: obj[0], value: obj[1] }))
}
