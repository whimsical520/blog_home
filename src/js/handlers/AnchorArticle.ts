import { fetchers } from '~/js/models/fetchers'
import { AnchorArticleItem } from '~/js/models/Detail/AnchorArticle'
import { EMetricsModelType } from '@yy/node_metrics'

const LIMIT = 12

export default async function fetchAnchorArticle(
  anchorYY: number,
  pageNo: number,
  limit?: number
): Promise<AnchorArticleItem[]> {
  try {
    const now = Date.now()
    const rs = await fetchers.anchorArticle({
      anchorYY,
      pageNo,
      limit: limit || LIMIT
    })
    if (rs && rs.code === 0 && rs?.data?.result.length > 0) {
      return rs.data.result
    } else {
      return []
    }
  } catch (error) {
    // TODO:
    console.debug('fetchAnchorTopic(): ' + error)
    return []
  }
}
