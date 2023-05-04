import { setHeightClose } from './utils/set-height-close'
import { setHeightOpen } from './utils/set-height-open'
import { getDuration } from './utils/get-duration'

interface Options {
  timeout?: number
}

/**
 * Обязательные аттрибуты для el:
 *
 * .class-in-el {
 *   --padding-top: Npx;
 *   --padding-bottom: Npx;
 *   overflow: hidden;
 *   transition: [duration] height [timing];
 * }
 * */
export const useAnimationHeight = (el: HTMLElement, options: Options) => {
  const { timeout } = options ?? {}

  let interval: any = undefined
  let isStateActive: 'open' | 'close' = undefined

  const getTimeout = () => {
    return timeout ? timeout : getDuration(el)
  }

  const open = () => {
    if (isStateActive === 'open') {
      return
    } else {
      isStateActive = 'open'
    }

    setHeightOpen(el)
    interval = setTimeout(() => (el.style.height = 'auto'), getTimeout())
  }

  const close = () => {
    if (isStateActive === 'close') {
      return
    } else {
      isStateActive = 'close'
    }

    setHeightClose(el)
    interval && clearTimeout(interval)
  }

  return {
    open,
    close
  }
}
