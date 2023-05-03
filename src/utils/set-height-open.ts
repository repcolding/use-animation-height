import { setAsyncProperty } from './set-async-property'
import { getPadding } from './get-padding'

export const setHeightOpen = (el) => {
  const padding = getPadding(el)
  const height = `${el.scrollHeight + padding}px`

  setAsyncProperty(el, {
    key: 'height',
    value: height
  })
}
