import { fetchers } from '~/js/models/fetchers'
import { SpecialTopicResult, SpecialTopicMsgItem } from '~/js/models/SpecialTopicMsg'
import { replaceProtocol } from '~/js/utils'
import { EMetricsModelType } from '@yy/node_metrics'
const PAGE_SIZE = 12

export default async function fetchSpecialTopicMsg(
  topicId: string,
  curPage: number
): Promise<any> {
  try {
    const now = Date.now()
    const rs = await fetchers.specialTopic({
      topicId: +topicId,
      pageSize: PAGE_SIZE,
      pageNo: curPage
    })
    if (rs && rs.code === 0 && rs.data && rs.data?.result?.length > 0) {
      const list = [...rs.data.result]
      list.map((item: SpecialTopicMsgItem) => {
        item.webCover = item.webCover ? replaceProtocol(item.webCover) : ''
        item.anchorInfo &&
          (item.anchorInfo.avatar = item?.anchorInfo?.avatar
            ? replaceProtocol(item?.anchorInfo?.avatar)
            : '')
        item.msgDesc = item.msgDesc ? replaceProtocol(item.msgDesc) : ''
        return item
      })
      return rs.data
    } else {
      return {
        limit: 0,
        totalRows: 0,
        pageNo: 0,
        result: null
      }
    }
  } catch (error) {
    // TODO:
    console.debug('fetchSpecialTopicMsg(): ' + error)
    return {
      limit: 0,
      totalRows: 0,
      pageNo: 0,
      result: null
    }
  }
}
