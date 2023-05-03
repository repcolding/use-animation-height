import { setHeightClose } from './utils/set-height-close'
import { setHeightOpen } from './utils/set-height-open'
import { getDuration } from './utils/get-duration'

interface Options {
  timeout: number
}

export function useAnimationHeight(el: HTMLElement, options: Options) {
  const { timeout } = options

  const getTimeout = () => {
    return timeout ? timeout : getDuration(el)
  }

  const open = () => {
    setHeightOpen(el)
    this.interval = setTimeout(() => (el.style.height = 'auto'), getTimeout())
  }

  const close = () => {
    setHeightClose(el)
    clearTimeout(this.interval)
  }

  return {
    open,
    close
  }
}
