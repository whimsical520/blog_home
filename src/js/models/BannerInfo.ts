import { NEW_YUE_HOST } from '~/js/const'
export const BANNER_INFO_URL = `//${NEW_YUE_HOST}/public/recommend/article-list`

export interface BannerInfoRequest {
  pageNo: number
  pageSize: number
}

export interface BannerInfoResponse {
  code: number
  message: string
  data: BannerInfoData
}

export interface BannerInfoData {
  limit: number
  totalRows: number
  pageNo: number
  result: BannerInfoItem[]
}

export interface BannerInfoItem {
  messageId: number
  title: string
  msgDesc: string
  readAmount: number
  publishTime: number // 发布时间
  currTime: number // 访问时间
  messageSource: 'S01' | 'S02' // S01:外部链接 S02:文章内容
  webCover: string
  weight: number
  h5Cover: string[]
  praiseAmount: number
  [k: string]: unknown
}
