const defValue = (str: string) => {
  return str === '' ? '0px' : str
}

const getProperty = (el: HTMLElement, value: string): string => {
  return defValue(getComputedStyle(el)[value])
}

const getCustomProperty = (el: HTMLElement, value: string): string => {
  return defValue(getComputedStyle(el).getPropertyValue(value))
}

export const getAttrPadding = (el: HTMLElement) => {
  const paddingTop = getProperty(el, 'padding-top')
  const paddingBottom = getProperty(el, 'padding-bottom')

  return parseInt(paddingTop) + parseInt(paddingBottom)
}

export const getVarsPadding = (el: HTMLElement) => {
  const paddingTop = getCustomProperty(el, '--padding-top')
  const paddingBottom = getCustomProperty(el, '--padding-bottom')

  return parseInt(paddingTop) + parseInt(paddingBottom)
}
