import { fetchers } from '~/js/models/fetchers'
import { RecommendTopicItem } from '~/js/models/RecommendTopic'
import { truncate } from '~/js/utils'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchRecommendTopic(): Promise<RecommendTopicItem[]> {
  try {
    const now = Date.now()
    const rs = await fetchers.recommendTopic({
      size: 8
    })
    if (rs.code === 0 && rs?.data?.length > 0) {
      const list = rs.data.map((item) => {
        item.topicName = truncate(item.topicName, 5, true)
        return item
      })
      return list
    }
    return []
  } catch (error) {
    // TODO:
    console.debug('fetchRecommendTopic(): ' + error)
    return []
  }
}
