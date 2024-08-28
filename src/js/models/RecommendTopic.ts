import { NEW_YUE_HOST } from '~/js/const'
export const RECOMMEND_TOPIC_URL = `//${NEW_YUE_HOST}/public/recommend/topic-list`

export interface RecommendTopicRequest {
  size: number
}

export interface RecommendTopicResponse {
  code: number
  message: string
  data: RecommendTopicItem[]
}

export interface RecommendTopicItem {
  id: number
  topicName: string
  recommendFlag: 0 | 1
}
