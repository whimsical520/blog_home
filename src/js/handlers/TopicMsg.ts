import { fetchers } from '~/js/models/fetchers'
import { TopicMsgItem } from '~/js/models/TopicMsg'
import { EMetricsModelType } from '@yy/node_metrics'

export interface RecommendModule {
  largeModuleList: TopicMsgItem[]
  smallModuleList: TopicMsgItem[]
}

export default async function fetchTopicMsg(): Promise<RecommendModule> {
  try {
    const now = Date.now()
    const rs = await fetchers.topicMsg()
    if (rs && rs.code === 0) {
      const largeModuleList: TopicMsgItem[] = []
      const smallModuleList: TopicMsgItem[] = []
      rs.data.forEach((item) => {
        if (item.topicInfoVO.recommendFlag === 1) {
          // 大专题模版
          // 每个专题只显示前6篇
          item.articleInfoVOS = item.articleInfoVOS.slice(0, 6)
          largeModuleList.push(item)
        } else {
          // 小专题模版
          // 每个专题只显示前3篇
          item.articleInfoVOS = item.articleInfoVOS.slice(0, 3)
          smallModuleList.push(item)
        }
      })
      return {
        largeModuleList,
        smallModuleList
      }
    } else {
      return {
        largeModuleList: [],
        smallModuleList: []
      }
    }
  } catch (error) {
    // TODO:
    console.debug('fetchTopicMsg(): ' + error)
    return {
      largeModuleList: [],
      smallModuleList: []
    }
  }
}
