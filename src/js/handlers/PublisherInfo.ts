import { fetchers } from '~/js/models/fetchers'
import { PublisherInfo } from '~/js/models/Publisher/PublisherInfo'
import { replaceProtocol } from '~/js/utils'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchPublisherInfo(
  publisherId: string | number
): Promise<PublisherInfo | null> {
  try {
    const now = Date.now()
    const rs = await fetchers.publisherInfo({
      publisherId
    })
    if (rs && rs.retMsg) {
      const info = rs?.retMsg
      info.headImg = info.headImg ? replaceProtocol(info.headImg) : ''
      return info
    } else {
      return null
    }
  } catch (error) {
    // TODO:
    console.debug('fetchPublisherInfo(): ' + error)
    return null
  }
}
