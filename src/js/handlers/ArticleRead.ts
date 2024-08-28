import { fetchers } from '~/js/models/fetchers'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchArticleRead(msgId: string | number): Promise<boolean> {
  try {
    const now = Date.now()
    const rs = await fetchers.articleRead({
      msgId
    })
    if (rs && rs.code === 0) {
      return true
    }
    return false
  } catch (error) {
    // TODO:
    console.debug('fetchArticleRead(): ' + error)
    console.debug(`msgId: ${JSON.stringify(msgId)}`)
    return false
  }
}
