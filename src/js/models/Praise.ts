import { NEW_YUE_HOST } from '~/js/const'
export const PRAISE_URL = `//${NEW_YUE_HOST}/praise/article-praise/{msgId}`

export interface PraiseCommonRequest {
  msgId: string | number
}

export interface PraiseCommonResponse {
  code: number // 0: 成功，1: 失败，99: 未登录
  message: string
  data?: any
}
