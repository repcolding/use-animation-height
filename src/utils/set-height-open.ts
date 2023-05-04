import { setAsyncProperty } from './set-async-property'
import { getAttrPadding, getVarsPadding } from './get-padding'

export const setHeightOpen = (el: HTMLElement) => {
  const varsPadding = getVarsPadding(el)
  const attrPadding = getAttrPadding(el)

  const height = `${el.scrollHeight - attrPadding + varsPadding}px`

  setAsyncProperty(el, {
    key: 'height',
    value: height
  })

  setAsyncProperty(el, {
    key: 'paddingTop',
    value: ''
  })

  setAsyncProperty(el, {
    key: 'paddingBottom',
    value: ''
  })
}
