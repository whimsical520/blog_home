import { YUE_HOST } from '~/js/const'
export const ANCHOR_SUB_STATUS_URL = `//${YUE_HOST}/tqw/userMessage/getSubscribeSituation`

export interface AnchorSubStatusRequest {
  // uid
  data: string | number
}

export interface AnchorSubStatusResponse {
  code: number
  result: AnchorSubStatusResult
}

export interface AnchorSubStatusResult {
  retCode?: string
  retMsg?: AnchorSubStatusInfo
}

export interface AnchorSubStatusInfo {
  [key: string]: AnchorSubStatusData
}

export interface AnchorSubStatusData {
  anchorUid?: string
  subStatus?: number
}
