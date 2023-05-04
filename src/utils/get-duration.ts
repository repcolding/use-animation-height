export const getDuration = (el: HTMLElement) => {
  const duration = getComputedStyle(el).getPropertyValue('transition-duration')

  return duration.indexOf('ms') > -1
    ? parseFloat(duration)
    : parseFloat(duration) * 1000
}
