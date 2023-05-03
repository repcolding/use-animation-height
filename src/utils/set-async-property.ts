type El = HTMLElement

interface Options {
  key: string
  value: string | number
}

const setAsyncProperty = (el: El, options: Options) => {
  const { key, value } = options

  el.style[key] = value
  return getComputedStyle(el)[key]
}

export { setAsyncProperty }
