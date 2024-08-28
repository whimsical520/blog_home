import { NEW_YUE_HOST } from '~/js/const'
export const ANCHOR_ARTICLE_URL = `//${NEW_YUE_HOST}/public/anchor/rela-article/{anchorYY}/{pageNo}/{limit}`

export interface AnchorArticleRequest {
  anchorYY: number
  pageNo: number
  limit: number
}

export interface AnchorArticleResponse {
  code: number
  message: string
  data: {
    limit: number
    totalRows: number
    pageNo: number
    result: AnchorArticleItem[]
  }
}

export interface AnchorArticleItem {
  messageId: number
  title: string
  msgDesc: string
  readAmount: number
  publishTime: number
  messageSource: 'S01' | 'S02' // S01:外部链接 S02:文章内容
  webCover: string // web封面图
  h5Cover: string[]
  praiseAmount: number
}
