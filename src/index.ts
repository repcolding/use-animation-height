import { setHeightClose } from './utils/set-height-close'
import { setHeightOpen } from './utils/set-height-open'
import { getDuration } from './utils/get-duration'

interface ClassList {
  add?: string
  remove?: string
}

interface Options {
  timeout?: number
}

/**
 * Example:
 *
 * .animated-dom {
 *   --padding-top: 18px;
 *   --padding-bottom: 18px;
 *
 *   padding-top: var(--padding-top);
 *   padding-bottom: var(--padding-bottom);
 *   overflow: hidden;
 *   height: auto;
 *   transition:
 *     [vars.$duration] height [vars.$timing],
 *     [vars.$duration] padding [vars.$timing],
 *     [vars.$duration] opacity [vars.$timing];
 *
 *   @media (width < [vars.$media-768px]) {
 *     --padding-top: 12px;
 *     --padding-bottom: 12px;
 *   }
 *
 *   &:not(&--active) {
 *     opacity: 0;
 *     padding-top: 0;
 *     padding-bottom: 0;
 *     height: 0;
 *   }
 * }
 * */

/**
 * Example:
 *
 * const { open, close } = useAnimationHeight(domEl)
 *
 * open({
 *   add: 'animated-dom--active'
 * })
 *
 * OR
 *
 * close({
 *   remove: 'animated-dom--active'
 * })
 * */

export const useAnimationHeight = (el: HTMLElement, options: Options) => {
  const { timeout } = options ?? {}

  let interval: any = undefined
  let isStateActive: 'open' | 'close' = undefined

  const getTimeout = () => {
    return timeout ? timeout : getDuration(el)
  }

  const open = (classList?: ClassList) => {
    if (isStateActive === 'open') {
      return
    } else {
      isStateActive = 'open'
    }

    setHeightOpen(el)
    interval = setTimeout(() => (el.style.height = 'auto'), getTimeout())

    classList?.add && el.classList.add(classList.add)
    classList?.remove && el.classList.remove(classList.remove)
  }

  const close = (classList?: ClassList) => {
    if (isStateActive === 'close') {
      return
    } else {
      isStateActive = 'close'
    }

    interval && clearTimeout(interval)
    setHeightClose(el)

    classList?.add && el.classList.add(classList.add)
    classList?.remove && el.classList.remove(classList.remove)
  }

  return {
    open,
    close
  }
}
