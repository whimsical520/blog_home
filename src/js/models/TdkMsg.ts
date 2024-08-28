import { YUE_HOST } from '~/js/const'
export const TDK_MSG_URL = `//${YUE_HOST}/seo/queryTdkMsg`

export interface TdkMsgRequest {
  tdkType: string
  contentId: number | string
}

export interface TdkMsgResponse {
  retMsg: TdkMsgInfo
}

export interface TdkMsgInfo {
  // id: string
  // tdkType: string
  // contentId: number
  // contentName: string
  // url: string
  title: string
  description: string
  keyword: string
  // status: number
  // ext1: string | null
  // ext2: string | null
}
