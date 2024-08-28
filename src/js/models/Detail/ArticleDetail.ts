import { NEW_YUE_HOST } from '~/js/const'
export const ARTICLE_DETAIL_URL = `//${NEW_YUE_HOST}/public/article/web/detail/{msgId}`

export interface ArticleDetailRequest {
  msgId: number | string
}

export interface ArticlePublisherInfo {
  id: number // 发布者id
  publisherName: string // 发布者名称
  headImg: string // 头像
  publisherType: 'S01' | 'S02' | 'S03' | 'S04' // 媒体类型: S01-内部媒体, S02-外部媒体, S03-频道OW, S04-官方机构
}

export interface ArticleAnchorInfo {
  uid: number
  yyno: number
  nick: string
  avatar: string
  pubCnt: number // 发文数量
  fansCount: number
  sign: string // 签名
  liveInfo?: {
    // 直播状态信息， 未直播时返回 null
    uid: number
    templateId: string
    topCid: number
    subCid: number
    liveId: string
  }
}

export interface ArticleDetailData {
  messageId: number
  title: string
  desc: string
  messageSource: 'S01' | 'S02' // S01:外部链接 S02:文章内容
  content: string // 文章内容
  readAmount: number
  publishTime: number
  webCover: string
  h5Cover: string[]
  praiseAmount: number // 点赞数
  isPraised: 0 | 1 // 用户是否已点赞, 1:已点赞 0:未点赞
  anchorInfo: ArticleAnchorInfo
  publisherInfo: ArticlePublisherInfo
}

export interface ArticleDetailResponse {
  code: number
  message: string
  data: ArticleDetailData
}

export interface ArticleWebData {
  messageId: number
  title: string
  desc: string
  messageSource: 'S01' | 'S02' // S01:外部链接 S02:文章内容
  content: string // 文章内容
  readAmount: number
  publishTime: number
  webCover: string
  praiseAmount: number // 点赞数
  isPraised: 0 | 1 // 用户是否已点赞, 1:已点赞 0:未点赞
}
