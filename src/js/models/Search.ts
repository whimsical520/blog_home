import { YUE_HOST } from '~/js/const'
export const SEARCH_URL = `//${YUE_HOST}/tqw/search/doSearch`

export interface SearchRequest {
  keyword: string
  index: number
  limit: number
  type: string
}

export interface SearchResponse {
  success: boolean
  error: boolean
  resultMap: SearchResultMap
}

export interface SearchResultMap {
  searchResult: SearchResult
}

export interface SearchResult {
  total: number
  publisherMessages?: SearchNewItem[]
  publishers?: SearchMediaItem[]
}

export interface SearchNewItem {
  content?: string
  contentView?: string
  createDate?: number
  day?: string
  endDate?: string | null
  hnumberImg?: string
  hnumberMsgType?: number
  headImg?: string
  id?: number
  isPopSend?: string
  messageSource?: string
  msgDesc?: string
  msgImg?: string
  msgImgMdnumber?: string
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

export interface SearchMediaItem {
  id: number
  publisherName: string
  publisherRank: null
  publisherType: string
  uid: number
  headImg: string
  publisherCard: string
  publisherDesc: string
  remindValid: null | number
  sex: null | number
  sexPub: null | number
  age: null | number
  agePub: null | number
  pubMsgNum: number
  subUserNum: number
  createDate: number
  modDate: number
  status: string
  headImgDate: null | number
  publisherCardDate: null | number
  publisherDescDate: null | number
  qrCode: null | string
  qrCodeDesc: null | string
  qrCodeDate: null | number
  qrCodeDescDate: null | number
  isSubscribe: number
  remindStatus: null | number
  unreadMsgNum: number
}
