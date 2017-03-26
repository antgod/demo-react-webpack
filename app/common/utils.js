export const keys = Object.keys

export function reduce(obj, handler, initial = {}) {
  return keys(obj).reduce((last, key) => handler(last, obj[key], key), initial)
}

export function filter(obj, handler) {
  return reduce(obj, (last, item, key) => (handler(item, key) ? { ...last, [key]: item } : last))
}

export function omit(obj, names) {
  return filter(obj, (value, name) => names.indexOf(name) === -1)
}

export function id(fn) {
  return (...argv) => fn.call(this, ...argv)
}

export function map(obj, fn) {
  return Object.keys(obj).reduce((output, key, index) => output.concat(fn(obj[key], key, index)), [])
}

