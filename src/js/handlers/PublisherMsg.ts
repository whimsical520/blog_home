import { fetchers } from '~/js/models/fetchers'
import { PublisherMsgItem } from '~/js/models/Publisher/PublisherMsg'
import { replaceProtocol } from '~/js/utils'
import { EMetricsModelType } from '@yy/node_metrics'

const LIMIT = 12

export default async function fetchPublisherMsg(
  publisherId: string | number,
  startDateStr: number
): Promise<PublisherMsgItem[]> {
  try {
    const now = Date.now()
    const rs = await fetchers.publisherMsg({
      publisherId,
      limit: LIMIT,
      startDateStr
    })
    if (rs && rs.messages?.length > 0) {
      const list = rs.messages
      list.map((item: PublisherMsgItem) => {
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
    console.debug('fetchPublisherMsg(): ' + error)
    return []
  }
}
