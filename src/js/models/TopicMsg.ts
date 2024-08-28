import { NEW_YUE_HOST } from '~/js/const'
export const TOPIC_MSG_URL = `//${NEW_YUE_HOST}/public/topic/topic-module-list`

export interface TopicMsgResponse {
  // topicIdSeq?: string[]
  // topicMsgMap?: TopicMsgMap
  code: number
  message: string
  data: TopicMsgItem[]
}

export interface TopicMsgItem {
  topicInfoVO: TopicInfo
  articleInfoVOS: ArticleInfo[]
}

export interface TopicInfo {
  id: number
  topicName: string
  recommendFlag: 0 | 1 // 推荐状态，0-否， 1-是
}

export interface ArticleInfo {
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
  [key: string]: any
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

// export interface TopicMsgMap {
//   [key: string]: TopicMsgItem[]
// }

// export interface TopicMsgItem {
//   id?: number
//   publisherId?: number
//   msgType?: string
//   msgTitle?: string
//   popupTitle?: string | null
//   msgDesc?: string
//   msgImg?: string
//   createDate?: number
//   sendDate?: number
//   startDate?: string | null
//   endDate?: string | null
//   content?: string
//   contentView?: string
//   messageSource?: string
//   status?: string
//   sentAmount?: number
//   praiseAmount?: number
//   readAmount?: number
//   msgImgView?: string
//   msgListImg?: string
//   msgImgViewShow?: string
//   isPopSend?: string
//   volumeControl?: number
//   h5Img?: string
//   h5MsgType?: number
//   topicId?: number
//   topicName?: string
//   publisherName?: string
//   headImg?: string
//   sendDateStr?: string
//   day?: null | string
//   messageUrl?: null | string
//   anchorUids?: null | string[]
// }
