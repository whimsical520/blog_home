import { fetchers } from '~/js/models/fetchers'
import { TopicItem } from '~/js/models/TopicAll'
import { replaceProtocol } from '~/js/utils'
import { EMetricsModelType } from '@yy/node_metrics'

const LIMIT = 12

export default async function fetchTopicAll(startDateStr: number): Promise<TopicItem[]> {
  try {
    const now = Date.now()
    const rs = await fetchers.topicAll({
      startDateStr,
      limit: LIMIT
    })
    if (rs && rs.retMsg?.length > 0) {
      const list = [...rs.retMsg]
      list.map((item: TopicItem) => {
        item.msgImg = item.msgImg ? replaceProtocol(item.msgImg) : ''
        item.content = item.content ? replaceProtocol(item.content) : ''
        item.contentView = item.contentView ? replaceProtocol(item.contentView) : ''
        item.msgImgView = item.msgImgView ? replaceProtocol(item.msgImgView) : ''
        item.msgListImg = item.msgListImg ? replaceProtocol(item.msgListImg) : ''
        item.headImg = item.headImg ? replaceProtocol(item.headImg) : ''
        return item
      })
      return list
    } else {
      return []
    }
  } catch (error) {
    // TODO:
    console.debug('fetchTopicAll(): ' + error)
    return []
  }
}
