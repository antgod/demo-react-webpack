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

export function isEmptyObject(object) {
  return object === undefined ? true : !Object.keys(object).length
}

export function id(fn) {
  return (...argv) => fn.call(this, ...argv)
}

export function pick(obj, names) {
  return filter(obj, (value, name) => names.indexOf(name) !== -1)
}

export function mapValues(obj, handler) {
  return reduce(obj, (last, value, key) => ({ ...last, [key]: handler(value, key) }))
}

export function map(obj, fn) {
  return Object.keys(obj).reduce((output, key, index) => output.concat(fn(obj[key], key, index)), [])
}

export function each(obj, fn) {
  return keys(obj).forEach((k) => {
    fn(obj[k], k)
  })
}

export function deepEach(obj, fn) {
  return Object.keys(obj).forEach((k) => {
    fn(obj[k], k)
    if (typeof obj[k] === 'object') {
      deepEach(obj[k], fn)
    }
  })
}

export function removeItem(obj, item) {
  if (Array.isArray(obj)) {
    obj.splice(obj.indexOf(item), 1)
  }
  Object.keys(obj).forEach((k) => {
    if (obj[k] === item) {
      delete obj[k]
    }
  })
}

export const typeChecker = data => type => (!type || toString.call(data) === `[object ${type}]`)

export function zip(zipKeys, zipValues) {
  return zipKeys.reduce((last, key, index) => {
    last[key] = zipValues[index]
    return last
  }, {})
}

export function addEvent(el, event, handler) {
  if (!el) return
  if (el.attachEvent) {
    el.attachEvent(`on${event}`, handler)
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true)
  } else {
    el[`on${event}`] = handler
  }
}

export function removeEvent(el, event, handler) {
  if (!el) return
  if (el.detachEvent) {
    el.detachEvent(`on${event}`, handler)
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true)
  } else {
    el[`on${event}`] = null
  }
}
/**
 * @param {Object} target
 * @param {Array<String>} methods
 */
export function binds(target, methods) {
  methods.forEach(methodName => {
    if (!target[methodName]) {
      throw new ErrorMessage(`未定义函数"${methodName}"`, true)
    }
    target[methodName] = target[methodName].bind(target)
  })
}

export function getBrowserPrefix() {
  if (typeof window === 'undefined') return ''
  const styles = window.getComputedStyle(document.documentElement, '')
  const pre = (Array.prototype.slice
    .call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
  )[1]
  if (pre === 'ms') return pre
  return pre.slice(0, 1).toUpperCase() + pre.slice(1)
}

export function indexBy(arr, indexKey) {
  return arr.reduce((output, current) => {
    output[current[indexKey]] = current
    return output
  }, {})
}

export function walk(obj, childrenName, handler, path = []) {
  handler(obj, path)
  if (obj[childrenName] !== undefined && Array.isArray(obj[childrenName])) {
    obj[childrenName].forEach((child, index) => walk(child, childrenName, handler, path.concat([childrenName, index])))
  }
}

export function values(obj) {
  return Object.keys(obj).map(key => obj[key])
}

export function safeEval(str) {
  const fnStr = `return (${toPolymorphismString(str).replace(/\n/g, '')})`
  const fn = new Function(fnStr)
  return fn()
}

export function subtract(all, some) {
  return all.reduce((output, name) => (!some.includes(name) ? output.concat(name) : output), [])
}

export function isAsyncFn(fn = () => {
}) {
  return /^async/.test(fn.name || '')
}

export function union(a, b) {
  return a.reduce((output, item) => (output.includes(item) ? output : output.concat([item])), b.slice(0))
}

export function nextTick(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      fn()
      resolve()
    }, 0)
  })
}

export function insert(arr, index, item) {
  return arr.slice(0, index).concat(item).concat(arr.slice(index))
}

export function capitalize(str) {
  return str === undefined || str.length === 0 ? str : `${str[0].toUpperCase()}${str.slice(1)}`
}

export function compact(arr) {
  return arr.filter(a => a)
}

export function different(a, b) {
  return reduce(b, (last, value, key) => (value !== a[key] ? last.concat({ key, value }) : last)
    , [])
}

export function shallowEqual(a, b) {
  return different(a, b).length === 0
}

