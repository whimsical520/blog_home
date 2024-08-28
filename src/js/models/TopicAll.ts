import { YUE_HOST } from '~/js/const'
export const TOPIC_ALL_URL = `//${YUE_HOST}/tqw/userIndex/queryAllMsgByDate`

export interface TopicAllRequest {
  startDateStr: number
  limit: number
}

export interface TopicAllResponse {
  retMsg: TopicItem[]
}

export interface TopicItem {
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
  startDate?: string | null
  endDate?: string | null
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
  publisherName?: string
  headImg?: string
  showTitle?: string | null
  popup?: any
  messageUrl?: string | null
  iframeUrl?: any
}
