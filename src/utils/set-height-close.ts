import { setAsyncProperty } from './set-async-property'

export const setHeightClose = (el: HTMLElement) => {
  const heightInner = el.offsetHeight

  setAsyncProperty(el, {
    key: 'height',
    value: `${heightInner}px`
  })

  setAsyncProperty(el, {
    key: 'height',
    value: 0
  })
}
