import { pxToRem } from '@/utils'

export const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToRem(767)}rem)`),
}
