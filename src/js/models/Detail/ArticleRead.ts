import { NEW_YUE_HOST } from '~/js/const'
export const ARTICLE_READ_URL = `//${NEW_YUE_HOST}/public/article/read/{msgId}`

export interface ArticleReadRequest {
  msgId: number | string
}

export interface ArticleReadResponse {
  code: number
  message: string
  data: string
}
