import { fetchers } from '~/js/models/fetchers'
import { TdkMsgInfo } from '~/js/models/TdkMsg'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchTdkMsg(
  tdkType: string,
  contentId: number | string
): Promise<TdkMsgInfo | null> {
  try {
    const now = Date.now()
    const rs = await fetchers.tdkMsg({
      tdkType,
      contentId
    })
    if (rs && rs.retMsg) {
      return rs.retMsg
    }
    return null
  } catch (error) {
    // TODO:
    console.debug('fetchTdkMsg(): ' + error)
    return null
  }
}
