import { fetchers } from '~/js/models/fetchers'
import { FocusAnchorItem } from '~/js/models/FocusAnchor'
import { replaceProtocol } from '~/js/utils'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchFocusAnchor(): Promise<FocusAnchorItem[]> {
  try {
    const now = Date.now()
    const rs = await fetchers.focusAnchor()
    if (rs && rs.retMsg) {
      const { data } = rs.retMsg
      const list = data.slice(0, 6)
      list.map((item: FocusAnchorItem) => {
        item.avatar = item.avatar ? replaceProtocol(item.avatar) : ''
        item.thumb2 = item.thumb2 ? replaceProtocol(item.thumb2) : ''
        return item
      })
      return list
    }
    return []
  } catch (error) {
    // TODO:
    console.debug('fetchFocusAnchor(): ' + error)
    return []
  }
}
