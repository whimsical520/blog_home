import { Stat, EmitParam } from '@yy/yy-stat'
import { IS_SERVER } from './const'

// 海度点击上报
export const iStat = new Stat({
  prodid: 'yylive',
  param: {
    sys: '4',
    report_type: 0
  }
})

export const yStat = new Stat({
  prodid: 'yyue',
  param: {
    sys: '4',
    report_type: 0
  }
})

interface IStatEvent {
  /** UV */
  UV: undefined
  /** Home */
  Home: undefined
  /** FocusAnchor */
  FocusAnchor: undefined
}

export function istat<T extends keyof IStatEvent>(type: T) {
  if (IS_SERVER) {
    return
  }
  let param: EmitParam = {}
  const logPrefix = '发送统计'
  switch (type) {
    case 'UV':
      param = {
        eventid: '20014307',
        ref: location.href
      }
      break
    case 'Home':
      param = {
        eventid: '20014147'
      }
      break
    case 'FocusAnchor':
      param = {
        eventid: '20014149'
      }
      break
  }
  if (param.eventid) {
    iStat.emit(param)
  }
}

// 文章详情内的点击事件
interface YStatEvent {
  /** 页面访问 */
  Visit: [string, string]
  /** 关注主播 */
  SubAnchor: [string, string]
  /** 观看直播 */
  Live: [string, string]
  /** 面包屑首页 */
  BreadHome: [string, string]
  /** 面包屑专题 */
  BreadTopic: [string, string]
  /** 标题下方媒体号 */
  Publisher: [string, string]
  /** 点赞点击 */
  Like: [string, string]
  /** 分享-飞机票 */
  Plane: [string, string]
  /** 分享-微信 */
  Weixin: [string, string]
  /** 分享-微博 */
  Weibo: [string, string]
  /** 分享-百度贴吧 */
  Tieba: [string, string]
  /** 分享-QQ空间 */
  QQZone: [string, string]
  /** 本文主播头像 */
  AnchorHead: [string, string]
  /** 本文主播名 */
  AnchorName: [string, string]
  /** 直播中按钮 */
  LiveBtn: [string, string]
  /** 本文主播关注 */
  AnchorFollow: [string, string]
  /** 主播资讯 */
  AnchorMsg: [string, string]
  /** 主播视频 */
  AnchorVideo: [string, string]
  /** 主播话题 */
  AnchorTopic: [string, string]
  /** 今日头条点击 */
  TodayHeadline: [string, string]
  /** 直播推荐点击 */
  LiveRecommend: [string, string]
}

export function ystat<T extends keyof YStatEvent>(type: T, args?: YStatEvent[T]) {
  if (IS_SERVER) {
    return
  }
  let param: EmitParam = {}
  const logPrefix = '发送统计'
  switch (type) {
    case 'Visit':
      param = {
        eventid: '20015981',
        act_type: '101',
        more_info: {
          word: args?.[0] || '',
          news_id: args?.[1] || ''
        }
      }
      break
    case 'SubAnchor':
      param = {
        eventid: '20012089',
        hostid: args?.[0] || '',
        more_info: {
          host_name: args?.[1] || ''
        }
      }
      break
    case 'Live':
      param = {
        eventid: '20012091',
        hostid: args?.[0] || '',
        more_info: {
          host_name: args?.[1] || ''
        }
      }
      break
    case 'BreadHome':
    case 'BreadTopic':
    case 'Publisher':
    case 'Like':
    case 'Plane':
    case 'Weixin':
    case 'Weibo':
    case 'Tieba':
    case 'QQZone':
    case 'AnchorHead':
    case 'AnchorName':
    case 'LiveBtn':
    case 'AnchorFollow':
    case 'AnchorMsg':
    case 'AnchorVideo':
    case 'AnchorTopic':
    case 'TodayHeadline':
      param = {
        eventid: '20015981',
        act_type: args?.[0] || '',
        more_info: {
          word: args?.[1] || ''
        }
      }
      break
    case 'LiveRecommend':
      param = {
        eventid: '20015981',
        act_type: args?.[0] || '',
        more_info: {
          rcmded_aid: args?.[1] || ''
        }
      }
  }
  if (param.eventid) {
    yStat.emit(param)
  }
}
