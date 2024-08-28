import { NEW_YUE_HOST } from '~/js/const'
export const SPECIAL_TOPIC_MSG_URL = `//${NEW_YUE_HOST}/public/topic/article-list`

export interface SpecialTopicMsgRequest {
  // startIndex: number
  // offset: number
  // topicId: number | string
  topicId: number
  pageNo: number
  pageSize: number
}

export interface SpecialTopicMsgResponse {
  code: number
  message: string
  data: SpecialTopicResult
}

export interface SpecialTopicResult {
  limit: number
  totalRows: number
  pageNo: number
  result: SpecialTopicMsgItem[]
}

export interface SpecialTopicMsgItem {
  messageId: number
  title: string
  msgDesc: string
  readAmount: number
  publishTime: number
  messageSource: 'S01' | 'S02' // S01:外部链接 S02:文章内容
  webCover: string // web封面图
  weight: number // 权重
  h5Cover: string[]
  praiseAmount: number
  isPraised: number
  anchorInfo: AnchorInfo
  currTime: number
  topicInfos: [
    {
      id: number
      topicName: string
      recommendFlag: 0 | 1
    }
  ]
  publisherInfo: PublisherInfo
}

export interface AnchorInfo {
  uid: number
  yyno: number
  nick: string
  avatar: string
  pubCnt: number
  fansCount: number
  sign: string
  [key: string]: any
}

export interface PublisherInfo {
  id: number
  publisherName: string
  headImg: string
  publisherType: 'S01' | 'S02' | 'S03' | 'S04' // 媒体类型: S01-内部媒体, S02-外部媒体, S03-频道OW, S04-官方机构
}
