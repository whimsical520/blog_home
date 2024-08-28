import { YUE_HOST } from '~/js/const'
export const PUBLISHER_MSG_URL = `//${YUE_HOST}/tqw/userSubscribe/showMsgByPublisher`

export interface PublisherMsgRequest {
  publisherId: number | string
  startDateStr: number
  limit: number
}

export interface PublisherMsgResponse {
  messages: PublisherMsgItem[]
  publisherName: string
}

export interface PublisherMsgItem {
  content?: string
  contentView?: string
  createDate?: number
  day?: string
  endDate?: string | null
  h5Img?: string
  h5MsgType?: number
  headImg?: string
  id?: number
  isPopSend?: string
  messageSource?: string
  msgDesc?: string
  msgImg?: string
  msgImgMd5?: string
  msgImgView?: string
  msgImgViewShow?: string
  msgListImg?: string
  msgTitle?: string
  msgType?: string
  popupTitle?: string | null
  praiseAmount?: number
  publisherId?: number
  publisherName?: string
  readAmount?: number
  readStatus?: number | null
  sendDate?: number
  sendDateStr?: string
  sentAmount?: number
  startDate?: string | null
  status?: string
  volumeControl?: number
}
