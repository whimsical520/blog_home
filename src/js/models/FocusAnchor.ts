import { YUE_HOST } from '~/js/const'
export const FOCUS_ANCHOR_URL = `//${YUE_HOST}/tqw/userIndex/publicShowAnchor`

export interface FocusAnchorResponse {
  retMsg: FocusAnchorData
}

export interface FocusAnchorData {
  data: FocusAnchorItem[]
}

export interface FocusAnchorItem {
  uid?: number
  sid?: number
  ssid?: number
  name?: string
  desc?: string
  avatar?: string
  users?: number
  tag?: string
  tagStyle?: number
  tpl?: number
  yyNum?: number
  thumb2?: string
}
