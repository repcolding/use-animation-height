export const getPadding = (el: HTMLElement) => {
  const paddingTop: string =
    getComputedStyle(el).getPropertyValue('--padding-top')

  const paddingBottom: string =
    getComputedStyle(el).getPropertyValue('--padding-bottom')

  return parseInt(paddingTop) + parseInt(paddingBottom)
}
