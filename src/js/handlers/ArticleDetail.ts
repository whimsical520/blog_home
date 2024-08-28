import { fetchers } from '~/js/models/fetchers'
import { ArticleDetailData } from '~/js/models/Detail/ArticleDetail'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchArticleDetail(
  msgId: string | number
): Promise<ArticleDetailData> {
  try {
    const now = Date.now()
    const rs = await fetchers.articleDetail({
      msgId
    })
    if (rs && rs.code === 0) {
      return rs.data
    }
    return {} as ArticleDetailData
  } catch (error) {
    // TODO:
    console.debug('fetchArticleDetail(): ' + error)
    console.debug(`msgId: ${JSON.stringify(msgId)}`)
    return {} as ArticleDetailData
  }
}
