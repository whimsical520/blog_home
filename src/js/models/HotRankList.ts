import { YUE_HOST } from '~/js/const'
export const HOT_RANK_LIST_URL = `//${YUE_HOST}/tqw/userIndex/queryHotMsg`

export interface HotRankListRequest {
  start: number
  limit: number
}

export interface HotRankListResponse {
  retMsg: HotRankItem[]
}

export interface HotRankItem {
  id?: number
  publisherId?: number
  msgType?: string
  msgTitle?: string
  popupTitle?: string | null
  msgDesc?: string
  msgImg?: string
  msgImgMd5?: string
  createDate?: number
  sendDate?: number
  startDate?: number | null
  endDate?: number | null
  content?: string
  contentView?: string
  messageSource?: string
  status?: string
  sentAmount?: number
  praiseAmount?: number
  readAmount?: number
  msgImgView?: string
  msgListImg?: string
  msgImgViewShow?: string
  isPopSend?: string
  volumeControl?: number
  h5Img?: string
  h5MsgType?: number
}
