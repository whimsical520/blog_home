import { fetchers } from '~/js/models/fetchers'
import { HotRankItem } from '~/js/models/HotRankList'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchHotRankList(): Promise<HotRankItem[]> {
  try {
    const now = Date.now()
    const rs = await fetchers.hotRankList()
    if (rs && rs.retMsg) {
      return rs.retMsg
    } else {
      return []
    }
  } catch (error) {
    // TODO:
    console.debug('fetchHotRankList(): ' + error)
    return []
  }
}
