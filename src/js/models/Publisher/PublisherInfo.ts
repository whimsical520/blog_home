import { YUE_HOST } from '~/js/const'
export const PUBLISHER_INFO_URL = `//${YUE_HOST}/tqw/userSubscribe/showPublisher`

export interface PublisherInfoRequest {
  publisherId: number | string
}

export interface PublisherInfoResponse {
  retMsg: PublisherInfo
}

export interface PublisherInfo {
  id?: number
  publisherName?: string
  publisherRank?: number | null
  publisherType?: string
  uid?: number
  headImg?: string
  publisherCard?: string
  publisherDesc?: string
  remindValid?: number | null
  sex?: number | null
  sexPub?: string | null
  age?: number | null
  agePub?: string | null
  pubMsgNum?: number
  subUserNum?: number
  createDate?: number
  modDate?: number
  status?: string
  headImgDate?: number
  publisherCardDate?: number
  publisherDescDate?: number
  qrCode?: string
  qrCodeDesc?: string
  qrCodeDate?: number
  qrCodeDescDate?: number
}
