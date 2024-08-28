import { WEB_USER_HOST } from '~/js/const'
export const ARTICLE_SUBSCRIBE_URL = `//${WEB_USER_HOST}/u/follow/add/{anchorYY}`

export interface ArticleSubscribeRequest {
  anchorYY: number | string
}

export interface ArticleSubscribeResponse {
  resultCode: number
  msg: string
  data: any
}
