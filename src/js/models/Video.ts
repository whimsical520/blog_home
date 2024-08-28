import { YUE_HOST } from '~/js/const'
export const VIDEO_URL = `//${YUE_HOST}/yyue/video/info`

export interface VideoRequest {
  vid: number | string
}

export interface VideoResponse {
  bitrate?: string // "338947"
  dpi?: string // "600*304"
  duration?: string // "13"
  fileSize?: string // "574558"
  snapshot?: string // "https://yycloudvod1467488744.bs2dl-ssl.yy.com/eXl1ZTEwYzkxMDhhMjViZDRhZTA4M2U1NmYwNjM0NjJjMTE2LTE3NjI4OTgxMDk=_1.jpg"
  url?: string // "https://yycloudvod1467488744.bs2dl-ssl.yy.com/eXl1ZTgyNjhmNjljMGYxOTQwMGJiODQyYzYzNjRhYjk0ZDM2LTkwMjExNzk3Ng=="
  vodid?: string // "yyuecdba74533e7d41159e69ad525d726779-1762898110"
}
